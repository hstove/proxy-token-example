
import type { TypedAbiArg, TypedAbiFunction, TypedAbiMap, TypedAbiVariable, Response } from '@clarigen/core';

export const contracts = {
  implementation: {
  "functions": {
    mint: {"name":"mint","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"recipient","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, recipient: TypedAbiArg<string, "recipient">], Response<boolean, bigint>>,
    transfer: {"name":"transfer","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"sender","type":"principal"},{"name":"recipient","type":"principal"},{"name":"memo","type":{"optional":{"buffer":{"length":34}}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, sender: TypedAbiArg<string, "sender">, recipient: TypedAbiArg<string, "recipient">, memo: TypedAbiArg<Uint8Array | null, "memo">], Response<boolean, bigint>>,
    updateBlocklist: {"name":"update-blocklist","access":"public","args":[{"name":"account","type":"principal"},{"name":"blocked","type":"bool"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[account: TypedAbiArg<string, "account">, blocked: TypedAbiArg<boolean, "blocked">], Response<boolean, bigint>>,
    isBlocked: {"name":"is-blocked","access":"read_only","args":[{"name":"account","type":"principal"}],"outputs":{"type":"bool"}} as TypedAbiFunction<[account: TypedAbiArg<string, "account">], boolean>
  },
  "maps": {
    blocklist: {"name":"blocklist","key":"principal","value":"bool"} as TypedAbiMap<string, boolean>
  },
  "variables": {
    ERR_BLOCKED: {
  name: 'ERR_BLOCKED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INVALID_CALLER: {
  name: 'ERR_INVALID_CALLER',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_UNAUTHORIZED: {
  name: 'ERR_UNAUTHORIZED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    owner: {
  name: 'owner',
  type: 'principal',
  access: 'constant'
} as TypedAbiVariable<string>
  },
  constants: {
  ERR_BLOCKED: {
    isOk: false,
    value: 401n
  },
  ERR_INVALID_CALLER: {
    isOk: false,
    value: 402n
  },
  ERR_UNAUTHORIZED: {
    isOk: false,
    value: 400n
  },
  owner: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM'
},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch25","clarity_version":"Clarity2",
  contractName: 'implementation',
  },
implementationTrait: {
  "functions": {
    
  },
  "maps": {
    
  },
  "variables": {
    
  },
  constants: {},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch25","clarity_version":"Clarity2",
  contractName: 'implementation-trait',
  },
outerV1: {
  "functions": {
    transfer: {"name":"transfer","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"sender","type":"principal"},{"name":"recipient","type":"principal"},{"name":"memo","type":{"optional":{"buffer":{"length":34}}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, sender: TypedAbiArg<string, "sender">, recipient: TypedAbiArg<string, "recipient">, memo: TypedAbiArg<Uint8Array | null, "memo">], Response<boolean, bigint>>,
    updateBlocklist: {"name":"update-blocklist","access":"public","args":[{"name":"account","type":"principal"},{"name":"blocked","type":"bool"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[account: TypedAbiArg<string, "account">, blocked: TypedAbiArg<boolean, "blocked">], Response<boolean, bigint>>,
    isBlocked: {"name":"is-blocked","access":"read_only","args":[{"name":"account","type":"principal"}],"outputs":{"type":"bool"}} as TypedAbiFunction<[account: TypedAbiArg<string, "account">], boolean>
  },
  "maps": {
    blocklist: {"name":"blocklist","key":"principal","value":"bool"} as TypedAbiMap<string, boolean>
  },
  "variables": {
    ERR_BLOCKED: {
  name: 'ERR_BLOCKED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_UNAUTHORIZED: {
  name: 'ERR_UNAUTHORIZED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    owner: {
  name: 'owner',
  type: 'principal',
  access: 'constant'
} as TypedAbiVariable<string>
  },
  constants: {
  ERR_BLOCKED: {
    isOk: false,
    value: 409n
  },
  ERR_UNAUTHORIZED: {
    isOk: false,
    value: 404n
  },
  owner: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM'
},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch25","clarity_version":"Clarity2",
  contractName: 'outer-v1',
  },
proxy: {
  "functions": {
    mint: {"name":"mint","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"recipient","type":"principal"},{"name":"implementation","type":"trait_reference"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, recipient: TypedAbiArg<string, "recipient">, implementation: TypedAbiArg<string, "implementation">], Response<boolean, bigint>>,
    setTokenUri: {"name":"set-token-uri","access":"public","args":[{"name":"value","type":{"string-utf8":{"length":256}}}],"outputs":{"type":{"response":{"ok":"bool","error":{"response":{"ok":"none","error":"uint128"}}}}}} as TypedAbiFunction<[value: TypedAbiArg<string, "value">], Response<boolean, Response<null, bigint>>>,
    transfer: {"name":"transfer","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"sender","type":"principal"},{"name":"recipient","type":"principal"},{"name":"memo","type":{"optional":{"buffer":{"length":34}}}},{"name":"implementation","type":"trait_reference"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, sender: TypedAbiArg<string, "sender">, recipient: TypedAbiArg<string, "recipient">, memo: TypedAbiArg<Uint8Array | null, "memo">, implementation: TypedAbiArg<string, "implementation">], Response<boolean, bigint>>,
    getBalance: {"name":"get-balance","access":"read_only","args":[{"name":"owner","type":"principal"}],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[owner: TypedAbiArg<string, "owner">], Response<bigint, null>>,
    getDecimals: {"name":"get-decimals","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getImplementation: {"name":"get-implementation","access":"read_only","args":[],"outputs":{"type":"principal"}} as TypedAbiFunction<[], string>,
    getName: {"name":"get-name","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"string-ascii":{"length":7}},"error":"none"}}}} as TypedAbiFunction<[], Response<string, null>>,
    getSymbol: {"name":"get-symbol","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"string-ascii":{"length":5}},"error":"none"}}}} as TypedAbiFunction<[], Response<string, null>>,
    getTokenUri: {"name":"get-token-uri","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"optional":{"string-utf8":{"length":256}}},"error":"none"}}}} as TypedAbiFunction<[], Response<string | null, null>>,
    getTotalSupply: {"name":"get-total-supply","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    validateImplementation: {"name":"validate-implementation","access":"read_only","args":[{"name":"implementation","type":"trait_reference"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[implementation: TypedAbiArg<string, "implementation">], Response<boolean, bigint>>
  },
  "maps": {
    
  },
  "variables": {
    ERR_INVALID_IMPLEMENTATION: {
  name: 'ERR_INVALID_IMPLEMENTATION',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_UNAUTHORIZED: {
  name: 'ERR_UNAUTHORIZED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    contractOwner: {
  name: 'contract-owner',
  type: 'principal',
  access: 'constant'
} as TypedAbiVariable<string>,
    currentImplementation: {
  name: 'current-implementation',
  type: 'principal',
  access: 'variable'
} as TypedAbiVariable<string>,
    tokenUri: {
  name: 'token-uri',
  type: {
    optional: {
      'string-utf8': {
        length: 256
      }
    }
  },
  access: 'variable'
} as TypedAbiVariable<string | null>
  },
  constants: {
  ERR_INVALID_IMPLEMENTATION: {
    isOk: false,
    value: 101n
  },
  ERR_UNAUTHORIZED: {
    isOk: false,
    value: 100n
  },
  contractOwner: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM',
  currentImplementation: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.implementation',
  tokenUri: null
},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[{"name":"mytoken"}],"epoch":"Epoch25","clarity_version":"Clarity2",
  contractName: 'proxy',
  },
proxyTokenTrait: {
  "functions": {
    
  },
  "maps": {
    
  },
  "variables": {
    
  },
  constants: {},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch25","clarity_version":"Clarity2",
  contractName: 'proxy-token-trait',
  },
sip010TraitFtStandard: {
  "functions": {
    
  },
  "maps": {
    
  },
  "variables": {
    
  },
  constants: {},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch21","clarity_version":"Clarity1",
  contractName: 'sip-010-trait-ft-standard',
  },
token: {
  "functions": {
    checkErr: {"name":"check-err","access":"private","args":[{"name":"result","type":{"response":{"ok":"bool","error":"uint128"}}},{"name":"prior","type":{"response":{"ok":"bool","error":"uint128"}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[result: TypedAbiArg<Response<boolean, number | bigint>, "result">, prior: TypedAbiArg<Response<boolean, number | bigint>, "prior">], Response<boolean, bigint>>,
    sendToken: {"name":"send-token","access":"private","args":[{"name":"recipient","type":{"tuple":[{"name":"amount","type":"uint128"},{"name":"memo","type":{"optional":{"buffer":{"length":34}}}},{"name":"to","type":"principal"}]}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[recipient: TypedAbiArg<{
  "amount": number | bigint;
  "memo": Uint8Array | null;
  "to": string;
}, "recipient">], Response<boolean, bigint>>,
    sendTokenWithMemo: {"name":"send-token-with-memo","access":"private","args":[{"name":"amount","type":"uint128"},{"name":"to","type":"principal"},{"name":"memo","type":{"optional":{"buffer":{"length":34}}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, to: TypedAbiArg<string, "to">, memo: TypedAbiArg<Uint8Array | null, "memo">], Response<boolean, bigint>>,
    mint: {"name":"mint","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"recipient","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":{"response":{"ok":"none","error":"uint128"}}}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, recipient: TypedAbiArg<string, "recipient">], Response<boolean, Response<null, bigint>>>,
    sendMany: {"name":"send-many","access":"public","args":[{"name":"recipients","type":{"list":{"type":{"tuple":[{"name":"amount","type":"uint128"},{"name":"memo","type":{"optional":{"buffer":{"length":34}}}},{"name":"to","type":"principal"}]},"length":200}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[recipients: TypedAbiArg<{
  "amount": number | bigint;
  "memo": Uint8Array | null;
  "to": string;
}[], "recipients">], Response<boolean, bigint>>,
    setProxy: {"name":"set-proxy","access":"public","args":[{"name":"proxy","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":{"response":{"ok":"none","error":"uint128"}}}}}} as TypedAbiFunction<[proxy: TypedAbiArg<string, "proxy">], Response<boolean, Response<null, bigint>>>,
    setTokenUri: {"name":"set-token-uri","access":"public","args":[{"name":"value","type":{"string-utf8":{"length":256}}}],"outputs":{"type":{"response":{"ok":"bool","error":{"response":{"ok":"none","error":"uint128"}}}}}} as TypedAbiFunction<[value: TypedAbiArg<string, "value">], Response<boolean, Response<null, bigint>>>,
    transfer: {"name":"transfer","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"sender","type":"principal"},{"name":"recipient","type":"principal"},{"name":"memo","type":{"optional":{"buffer":{"length":34}}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, sender: TypedAbiArg<string, "sender">, recipient: TypedAbiArg<string, "recipient">, memo: TypedAbiArg<Uint8Array | null, "memo">], Response<boolean, bigint>>,
    getBalance: {"name":"get-balance","access":"read_only","args":[{"name":"owner","type":"principal"}],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[owner: TypedAbiArg<string, "owner">], Response<bigint, null>>,
    getDecimals: {"name":"get-decimals","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getName: {"name":"get-name","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"string-ascii":{"length":7}},"error":"none"}}}} as TypedAbiFunction<[], Response<string, null>>,
    getProxy: {"name":"get-proxy","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"optional":"principal"},"error":"none"}}}} as TypedAbiFunction<[], Response<string | null, null>>,
    getSymbol: {"name":"get-symbol","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"string-ascii":{"length":5}},"error":"none"}}}} as TypedAbiFunction<[], Response<string, null>>,
    getTokenUri: {"name":"get-token-uri","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"optional":{"string-utf8":{"length":256}}},"error":"none"}}}} as TypedAbiFunction<[], Response<string | null, null>>,
    getTotalSupply: {"name":"get-total-supply","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>
  },
  "maps": {
    
  },
  "variables": {
    ERR_INVALID_CALLER: {
  name: 'ERR_INVALID_CALLER',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_UNAUTHORIZED: {
  name: 'ERR_UNAUTHORIZED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    contractOwner: {
  name: 'contract-owner',
  type: 'principal',
  access: 'constant'
} as TypedAbiVariable<string>,
    proxyVar: {
  name: 'proxy-var',
  type: {
    optional: 'principal'
  },
  access: 'variable'
} as TypedAbiVariable<string | null>,
    tokenUri: {
  name: 'token-uri',
  type: {
    optional: {
      'string-utf8': {
        length: 256
      }
    }
  },
  access: 'variable'
} as TypedAbiVariable<string | null>
  },
  constants: {
  ERR_INVALID_CALLER: {
    isOk: false,
    value: 101n
  },
  ERR_UNAUTHORIZED: {
    isOk: false,
    value: 100n
  },
  contractOwner: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM',
  proxyVar: null,
  tokenUri: null
},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[{"name":"mytoken"}],"epoch":"Epoch25","clarity_version":"Clarity2",
  contractName: 'token',
  }
} as const;

export const accounts = {"faucet":{"address":"STNHKEPYEPJ8ET55ZZ0M5A34J0R3N5FM2CMMMAZ6","balance":"100000000000000"},"wallet_3":{"address":"ST2JHG361ZXG51QTKY2NQCVBPPRRE2KZB1HR05NNC","balance":"100000000000000"},"wallet_8":{"address":"ST3NBRSFKX28FQ2ZJ1MAKX58HKHSDGNV5N7R21XCP","balance":"100000000000000"},"wallet_6":{"address":"ST3AM1A56AK2C1XAFJ4115ZSV26EB49BVQ10MGCS0","balance":"100000000000000"},"deployer":{"address":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM","balance":"100000000000000"},"wallet_7":{"address":"ST3PF13W7Z0RRM42A8VZRVFQ75SV1K26RXEP8YGKJ","balance":"100000000000000"},"wallet_1":{"address":"ST1SJ3DTE5DN7X54YDH5D64R3BCB6A2AG2ZQ8YPD5","balance":"100000000000000"},"wallet_5":{"address":"ST2REHHS5J3CERCRBEPMGH7921Q6PYKAADT7JP2VB","balance":"100000000000000"},"wallet_4":{"address":"ST2NEB84ASENDXKYGJPQW86YXQCEFEX2ZQPG87ND","balance":"100000000000000"},"wallet_2":{"address":"ST2CY5V39NHDPWSXMW9QDT3HC3GD6Q6XX4CFRK9AG","balance":"100000000000000"}} as const;

export const identifiers = {"implementation":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.implementation","implementationTrait":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.implementation-trait","outerV1":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.outer-v1","proxy":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proxy","proxyTokenTrait":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proxy-token-trait","sip010TraitFtStandard":"SP3FBR2AGK5H9QBDH3EEN6DF8EK8JY7RX8QJ5SVTE.sip-010-trait-ft-standard","token":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.token"} as const

export const simnet = {
  accounts,
  contracts,
  identifiers,
} as const;


export const deployments = {"implementation":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.implementation","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.implementation","testnet":null,"mainnet":null},"implementationTrait":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.implementation-trait","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.implementation-trait","testnet":null,"mainnet":null},"outerV1":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.outer-v1","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.outer-v1","testnet":null,"mainnet":null},"proxy":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proxy","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proxy","testnet":null,"mainnet":null},"proxyTokenTrait":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proxy-token-trait","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.proxy-token-trait","testnet":null,"mainnet":null},"sip010TraitFtStandard":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.sip-010-trait-ft-standard","simnet":"SP3FBR2AGK5H9QBDH3EEN6DF8EK8JY7RX8QJ5SVTE.sip-010-trait-ft-standard","testnet":null,"mainnet":"SP3FBR2AGK5H9QBDH3EEN6DF8EK8JY7RX8QJ5SVTE.sip-010-trait-ft-standard"},"token":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.token","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.token","testnet":null,"mainnet":null}} as const;

export const project = {
  contracts,
  deployments,
} as const;
  