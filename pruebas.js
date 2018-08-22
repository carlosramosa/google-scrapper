'use strict';

const GoogleScrapper = require ('./index');

const search = GoogleScrapper.search;

const searchBananas = async () => {
    const hola = await search('polla de mono');
    console.log (hola);
    return hola;
};

searchBananas();