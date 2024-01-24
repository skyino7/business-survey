const GooglePlaces = require('google-places-api');
require('dotenv').config();

const apiKey = process.env.API_KEY;
const location = 'Accra, Ghana';

const googlePlaces = new GooglePlaces(apiKey);

const currentTime = new Date().getHours();

let type = 'establishment';

if (currentTime >= 11 && currentTime <= 14) {
  type = 'restaurant';
} else if (currentTime >= 19) {
  type = 'bar';
}

googlePlaces.nearbySearch({
  location: location,
  radius: 5000,
  type: type
})
.then(results => {
  console.log(results);
})
.catch(error => {
  console.error(error);
});