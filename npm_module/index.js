var request = require("sync-request");
exports.token_data = function(path, network = "mainnet") {
    var supported_paths = [
        "symbol_to_details",
        "symbol_to_contract",
        "contract_to_symbol",
        "symbol_to_description",
        "contract_to_abi"        
    ]
    if (supported_paths.indexOf(path) >= 0) {
        var res = request('GET', 'https://ethfaction.github.io/erc20_tokens/' + network + '/' + path);
        return JSON.parse(res.getBody('utf-8'));
    }
    return {
        "error": "format not supported"
    }
}