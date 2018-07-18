Fetch standard list of ERC20 tokens on ethereum network.

Raw list and APIs can be found at https://github.com/ethfaction/erc20_tokens.

### Usage:

```
const erc20 = require('erc20_tokens');

var token_mapping = erc20.token_data('symbol_to_details');
console.log(token_mapping);
```