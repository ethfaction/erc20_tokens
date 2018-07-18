var request = require("sync-request");
exports.token_data = function(path) {
    var supported_paths = [
        "symbol_to_details"
    ]
    if (supported_paths.indexOf(path) >= 0) {
        var res = request('GET', 'https://ethfaction.github.io/erc20_tokens/mainnet/' + path);
        return res.getBody('utf-8');
    }
    return "Not supported"
}