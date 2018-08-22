'use strict';

const request = require('request-promise');
const cheerio = require('cheerio');
const decode = require('decode-uri-component');

const requestOptions = {
    uri: 'http://www.google.com/search?q=caca+de+vaca'
    , encoding: 'binary'

};
const cheerioOptions = {
    normalizeWhitespace: true
    , xmlMode: false
    , decoteEntities: false
};

const hrefRegex = /href="\/url\?[^"]+"/gm;
const matchUrl = elem => elem.match(hrefRegex);

const formatUrl = url => decode(url.substring(url.indexOf('href="/url?q=')+13, url.indexOf('&amp')));
const getUrl = elem =>formatUrl(matchUrl(elem)[0]);

const parse = (body) =>{
    const fs = require('fs');

    const $ = cheerio.load(body, cheerioOptions);
    const polla = [];
    $('div.g').each((i, elem) => {
        polla.push({
            text: $(elem).text()
            , html: $(elem).html()
            , url: getUrl($(elem).html())
            , title:  decode($(elem).find('a').text())
        });
    });

    console.log(JSON.stringify(polla,  null,  4));

    // fs.writeFile('pene.xml',body, function (err) {
    //   if (err) throw err;
    //   console.log('Saved!');
    // });
    
    const ini = body.indexOf('id="ires">');
    const fin = body.indexOf('id="bfoot">');
    const div = body.substring(ini, fin);
    // console.log(div);

};



const requestGoogle = async() => {

    const body = await request(requestOptions);

    
    const list = parse(body);

    // console.log(list);

};


requestGoogle();