'use strict';

const decode = require('decode-uri-component');

const cleanner = ( results ) =>
    results.filter (( { text } ) => text !== '');

const hrefRegex = /href="\/url\?[^"]+"/gm;

const matchUrl = elem =>
    elem.match(hrefRegex) || [];

const formatUrl = url => 
    url.indexOf('href="/url?q=')+13 < url.indexOf('&amp')
        ? decode(url.substring(url.indexOf('href="/url?q=')+13, url.indexOf('&amp')))
        : null
    ;

const existElement = ( arr ) =>
    typeof arr !== 'undefined' && arr.length > 0
    ;

const getUrl = elem =>
    existElement ( elem )
        ? formatUrl(matchUrl(elem)[0] || '' )
        : ''
    ;

const format = ( query ) =>
    query.replace(/ /g, '+');

const buildUri = ( query ) =>
    `http://www.google.com/search?q=${query}`;

const makeUri = ( query ) =>
    buildUri ( format ( query ));

module.exports = {
    makeUri
    , getUrl
    , cleanner
}
