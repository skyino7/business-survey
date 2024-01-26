const GooglePlaces = require('google-places-api');
require('dotenv').config();

const apiKey = process.env.API_KEY;
const location = '5.6037,-0.1870';

const googlePlaces = new GooglePlaces(apiKey);

googlePlaces.nearbySearch({
    location: location,
    radius: 5000,
    type: 'restaurant',
  })
  .then(response => {
    console.log('Full API Response:', response);

    // const results = response.data && response.data.results ? response.data.results : [];

    console.log('API Response:', results.length, 'results');

    if (results.length > 0) {
      results.forEach((result, index) => {
        console.log(`Restaurant ${index + 1}:`, result.name);
        console.log('Address:', result.vicinity || 'No address available');
        console.log('Rating:', result.rating);
        console.log('---');
      });
    } else {
      console.log('No restaurants found');
    }

    console.log('Done');
  })
  .catch(error => {
    console.error('Error:', error.message || error);
    // if (error.response) {
    //   console.error('Response Status:', error.response.status);
    //   console.error('Response Data:', error.response.data);
    // }
  });
