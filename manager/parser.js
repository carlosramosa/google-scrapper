'use strict';

const decode = require('decode-uri-component');
const utf8 = require("utf8")

/**
 * FUNCTION TO DELETE EMPTY ITEMS
 */
const cleanner = ( results ) =>
    results.filter (( { text } ) => text !== '');



/**
 * FUNCTIONS TO FORMAT URL FOR EACH RESULT
 */
const hrefRegex = /href="\/url\?[^"]+"/gm;

const matchHref = elem =>
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
        ? formatUrl(matchHref(elem)[0] || '' )
        : ''
    ;



/**
 * FUNCTIONS TO FORMAT RESPONSE TEXT
 */
const urisRegex = /http[s]?:\/\/[^\s]+/gm;

const deleteUri = ( text ) =>
    text.replace(urisRegex, '');

const deleteLineSymbols = ( text ) =>
    text.replace(/(\r\n\t|\n|\r\t)/gm,'');


const getText = ( text ) => 
    deleteLineSymbols ( deleteUri ( text ));



/**
 * FUNCTIONS TO FORMAT URL TO MAKE REQUEST
 */
const format = ( query ) =>
    query.replace(/ /g, '+');

const buildUri = ( query ) =>
    `http://www.google.com/search?q=${query}`;

const makeUri = ( query ) =>
    buildUri ( format ( query ));

module.exports = {
    makeUri
    , getUrl
    , getText
    , cleanner
}
