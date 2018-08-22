'use strict';

const request = require('request-promise');

const makeRequestOptions = ( uri ) => ({
    uri
    , encoding: 'binary'
});

const makeRequest = async ( uri ) => {
    const requestOptions = makeRequestOptions ( uri );
    return request(requestOptions);
}

module.exports.makeRequest = makeRequest;
