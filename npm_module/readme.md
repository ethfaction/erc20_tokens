# erc20_tokens (npm_module)
[![NPM](https://nodei.co/npm/erc20_tokens.png)](https://www.npmjs.com/package/erc20_tokens)

Fetch standard list of ERC20 tokens available on ethereum network.

Raw list of tokens and API endpoints can be found at https://github.com/ethfaction/erc20_tokens.

**Pull requests are welcome for any missing tokens or new format suggestions**

### Usage:

```
const erc20 = require('erc20_tokens');

var token_mapping = erc20.token_data('symbol_to_details');
console.log(token_mapping);

>> {
        "TST": {
            "name": "Test Standard Token",
            "contract_address": "0x3eFd578b271d034a69499E4A2d933C631D44B9aD",
            "precision": 18
        },
        "AURA": {
            "name": "Aurora DAO",
            "contract_address": "0xCdCFc0f66c522Fd086A1b725ea3c0Eeb9F9e8814",
            "precision": 18
        },
        ...
    }
```

### Supported formats:

* symbol_to_details
* symbol_to_contract
* contract_to_symbol
* symbol_to_description