# Clarity Token with Proxy

This project includes a simple setup for a fungible token contract that operates with a proxy.

There are two contracts:

- [token](./contracts/token.clar) - The "root" token contract. This is where the low-level fungible token balance is maintained.
- [proxy](./contracts/proxy-v1.clar) - The proxy method. This holds the implementation details for transfers and other functionality.

The [test file](./tests/proxy.test.ts) demonstrates how the proxy and token work together.

The proxy contract implements a "blocklist", which can be managed by the contract admin.

## Usage

Install dependencies:

```bash
pnpm install
```

Run tests:

```bash
pnpm test
```
