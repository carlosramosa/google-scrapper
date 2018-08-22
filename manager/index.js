'use strict';

const cheerio = require('cheerio');
const decode = require('decode-uri-component');
const { makeRequest } =  require ('./request.js');
const { makeUri, getUrl, getText, cleanner } = require ('./parser.js');


const cheerioOptions = {
    normalizeWhitespace: true
    , xmlMode: false
    , decoteEntities: false
};

const processor = async ( uri ) =>{

    const body = await makeRequest ( makeUri ( uri ) );

    const items = [];
    const $ = cheerio.load(body, cheerioOptions);
    $('div.g').each(( i, elem ) => {
        console.log($(elem).text());
        items.push({
            text: typeof ($(elem).text()) === 'string' ? getText( $(elem).text()) : ''
            //, html: $(elem).html()
            , url: getUrl($(elem).html()) || ''
            , title:  decode($(elem).find('a').text())
        });
    });
    return cleanner (items);

};



module.exports.processor = processor;
