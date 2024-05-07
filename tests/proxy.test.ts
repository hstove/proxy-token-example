import { accounts, project } from "./clarigen-types";
import { projectFactory } from "@clarigen/core";
import { describe, expect, it } from "vitest";
import { rovOk, txOk, txErr, rov } from "@clarigen/test";

const contracts = projectFactory(project, "simnet");
const proxy = contracts.proxy;
const implementation = contracts.implementation;

const owner = accounts.deployer.address;

const alice = accounts.wallet_1.address;

const implementationErrors = {
  invalidCaller: implementation.constants.ERR_INVALID_CALLER.value,
  unauthorized: implementation.constants.ERR_UNAUTHORIZED.value,
  blocked: implementation.constants.ERR_BLOCKED.value,
} as const;

const proxyErrors = {
  invalidImplementation: proxy.constants.ERR_INVALID_IMPLEMENTATION.value,
  unauthorized: proxy.constants.ERR_UNAUTHORIZED.value,
} as const;

describe("Token proxy contract", () => {
  it("initial setup", () => {
    // Proxy not set yet
    const currentProxy = rov(proxy.getImplementation());
    expect(currentProxy).toEqual(implementation.identifier);

    // mint some tokens for testing
    txOk(proxy.mint(1000, alice, implementation.identifier), owner);
    txOk(proxy.mint(1000, owner, implementation.identifier), owner);
    expect(rovOk(proxy.getBalance(alice))).toEqual(1000n);
  });

  it("users cannot transfer directly in the implementation contract", () => {
    const receipt = txErr(
      implementation.transfer({
        amount: 10,
        sender: alice,
        recipient: owner,
        memo: null,
      }),
      alice
    );

    expect(receipt.value).toEqual(implementationErrors.invalidCaller);
  });

  it("implementation verification", () => {
    const receipt = rovOk(
      proxy.validateImplementation(implementation.identifier)
    );
    expect(receipt).toEqual(true);
  });

  it("users can transfer from proxy", () => {
    const receipt = txOk(
      proxy.transfer({
        amount: 10,
        sender: alice,
        recipient: owner,
        memo: null,
        implementation: implementation.identifier,
      }),
      alice
    );
    expect(receipt.value).toEqual(true);
  });

  it("owner blocks alice", () => {
    txOk(implementation.updateBlocklist(alice, true), owner);

    expect(rov(implementation.isBlocked(alice))).toEqual(true);
  });

  it("blocked user cant transfer from proxy", () => {
    const receipt = txErr(
      proxy.transfer({
        amount: 10n,
        sender: alice,
        recipient: owner,
        memo: null,
        implementation: implementation.identifier,
      }),
      alice
    );

    expect(receipt.value).toEqual(implementationErrors.blocked);
  });
});
