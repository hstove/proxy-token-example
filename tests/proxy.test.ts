import { accounts, project } from "./clarigen-types";
import { projectFactory } from "@clarigen/core";
import { describe, expect, it } from "vitest";
import { rovOk, txOk, txErr, rov } from "@clarigen/test";

const contracts = projectFactory(project, "simnet");
const proxy = contracts.proxyV1;
const token = contracts.token;

const owner = accounts.deployer.address;

const alice = accounts.wallet_1.address;

const tokenErrors = {
  invalidCaller: token.constants.ERR_INVALID_CALLER.value,
  unauthorized: token.constants.ERR_UNAUTHORIZED.value,
} as const;

const proxyErrors = {
  blocklisted: proxy.constants.ERR_BLOCKED.value,
  unauthorized: proxy.constants.ERR_UNAUTHORIZED.value,
} as const;

describe("Token proxy contract", () => {
  it("initial setup", () => {
    // Proxy not set yet
    const currentProxy = rovOk(token.getProxy());
    expect(currentProxy).toEqual(null);

    // owner sets the proxy
    txOk(token.setProxy(proxy.identifier), owner);
    expect(rovOk(token.getProxy())).toEqual(proxy.identifier);

    // mint some tokens for testing
    txOk(token.mint(1000, alice), owner);
    txOk(token.mint(1000, owner), owner);
    expect(rovOk(token.getBalance(alice))).toEqual(1000n);
  });

  it("users cannot transfer directly in the token contract", () => {
    const receipt = txErr(
      token.transfer({
        amount: 10,
        sender: alice,
        recipient: owner,
        memo: null,
      }),
      alice
    );

    expect(receipt.value).toEqual(tokenErrors.invalidCaller);
  });

  it("users can transfer from proxy", () => {
    const receipt = txOk(
      proxy.transfer({
        amount: 10,
        sender: alice,
        recipient: owner,
        memo: null,
      }),
      alice
    );
    expect(receipt.value).toEqual(true);
  });

  it("owner blocks alice", () => {
    txOk(proxy.updateBlocklist(alice, true), owner);

    expect(rov(proxy.isBlocked(alice))).toEqual(true);
  });

  it("blocked user cant transfer from proxy", () => {
    const receipt = txErr(
      proxy.transfer({
        amount: 10n,
        sender: alice,
        recipient: owner,
        memo: null,
      }),
      alice
    );

    expect(receipt.value).toEqual(proxyErrors.blocklisted);
  });
});
