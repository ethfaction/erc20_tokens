# Standard List of ERC20 Tokens on Ethereum:

Find the npm module at https://www.npmjs.com/package/erc20_tokens.

Do a `GET` request on `https://ethfaction.github.io/erc20_tokens/<network_version>/<data_format>` for a consolidated json data of all the ERC20 Tokens on ethereum network.

**Raise-issue/Pull-request to add any missing token details**

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
```
GET https://ethfaction.github.io/erc20_tokens/mainnet/symbol_to_details

response:
{
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
```
GET https://ethfaction.github.io/erc20_tokens/mainnet/symbol_to_description

response:
{
    "TST": "For testing of ERC-20 token apps. Create free TST by calling showMeTheMoney(address _to, uint256 _value).",
    "AURA": "Aurora DAO is a suite of dApps and protocols that together comprise a fully decentralized and autonomous banking and finance platform. Aurora provides an advanced, open, and stable financial network, accessible by anyone in the world regardless of geographic location or class status. The native network token AURA is an ERC20 token, that aligns the interests of Aurora and the Snowglobe (a fully decentralized exchange protocol) operators.",
    ...
}