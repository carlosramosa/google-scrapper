# google-scrapper

This module translates anything you want to the odor language:
```js
oDOr Odor oDOr OdOR Odor Odor odor 
```
# Install
```
npm install google-search-scraper
```

# Usage


Just require the module like any other npm module 
```js
const GoogleSearchScraper = require('google-search-scraper');
const search = GoogleSearchScraper.search;
```
or
```js
const { search } = require ( 'google-search-scraper' );
```

# Methods

This module (for now) has one method:

- search: Search in Google the desired text string

# Examples

```js
const { search } = require ( 'google-search-scraper' );

const searchBanana = search ( 'banana' )
    .then(( result ) => console.log ( result ));

searchBanana ();

```
Output:
```js
[ 
    { text:
    'Banana - Wikipedia, la enciclopedia libre cachéLa banana (término utilizado en Argentina, Bolivia, Honduras, México, Nicaragua, Paraguay, Puerto Rico, Uruguay y República Dominicana), plátano (en el ...',
    url: 'https://es.wikipedia.org/wiki/Banana',
    title: 'Banana - Wikipedia, la enciclopedia libre' },
    { text: 'Imágenes de banana',
    url: 'https://www.kroger.com/p/banana/0000000004011',
    title: 'Imágenes de banana' },
  { text:
     'Banana versus plátano, ¿sabes cuál es más saludable? | Diario Sur caché6 Jun 2018 ... Mientras que la banana suele ser más grande –más larga y de mayor peso-, el plátano tiene una forma más curvada y reducida y su diámetro ...',
    url:
     'https://www.diariosur.es/sociedad/banana-versus-platano-20180606113425-nt.html',
    title:
     'Banana versus plátano, ¿sabes cuál es más saludable? | Diario Sur' },
  { text:
     'Productos - Banana Computer, tus tiendas Apple Premium Reseller ... cachéSimilaresSi deseas comprar este producto en una de nuestras tiendas, sólo tienes que rellenareste cuestionario y venir a buscarlo desde el mismo momento que te ...iPhone - iPad - Mac - Watch',
    url: 'https://store.bananacomputer.com/productosv2/',
    title:
     'Productos - Banana Computer, tus tiendas Apple Premium Reseller ...SimilaresiPhoneiPadMacWatch' },
     ....
     ....
     ....
   ]
```
