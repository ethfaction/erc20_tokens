# Standard List of ERC20 Tokens on Ethereum:

Do a **GET** request on https://ethfaction.github.io/erc20_tokens/<network_version>/<data_format> for a consolidated json data of all the ERC20 Tokens on ethereum network.

## Example APIs:

### Mainnet
```
GET https://ethfaction.github.io/erc20_tokens/mainnet/symbol_to_contract

response:
{
    "TST": "0x3eFd578b271d034a69499E4A2d933C631D44B9aD",
    "AURA": "0xCdCFc0f66c522Fd086A1b725ea3c0Eeb9F9e8814",
    ...
}
```
```
GET https://ethfaction.github.io/erc20_tokens/mainnet/contract_to_symbol

response:
{
    "0x3eFd578b271d034a69499E4A2d933C631D44B9aD": "TST",
    "0xCdCFc0f66c522Fd086A1b725ea3c0Eeb9F9e8814": "AURA",
    ...
}
```