const Request = require('request-promise-native');
const headers = {
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
    'Accept-Language': 'en-US,en;q=0.9',
    'DNT': '1',
};

/**
 * @param {requestPromise.RequestPromiseOptions} option
 * @returns {request.RequestAPI|requestPromise.RequestPromiseAPI}
 */
function createRequest(option = {}) {
    if (option.headers != null) {
        option.headers = {
            ...headers,
            ...option.headers
        }
    } else {
        option.headers = headers;
    }
    return Request.defaults({
        forever: true,
        gzip: true,
        simple: false,
        resolveWithFullResponse: true,
        timeout: 30 * 60 * 1000,
        ...option
    });
}

module.exports = {
    createRequest
};
