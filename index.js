const GooglePlaces = require('google-places-api');
require('dotenv').config();

const apiKey = process.env.API_KEY;
const location = '5.6037,-0.1870';

const googlePlaces = new GooglePlaces(apiKey);

// console.log('API Key:', apiKey);

// const cuisineType = 'italian';

googlePlaces.nearbySearch({
    location: location,
    radius: 10,
    types: 'restaurant',
})
.then(results => {
    console.log('API Response:', results);
    console.log('Establishments:', results);
})
.catch(error => {
    console.error('Error:', error);
});