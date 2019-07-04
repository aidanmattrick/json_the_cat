const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, resp, body) => {
  // console.log(body);
  // console.log(typeof body);
    if (error) {
      return console.log('Failed to request details: ', error);
    }

    const data = JSON.parse(body);
  
    const breed = data[0]; //why data[0], when same as data?

    callback(error, breed.description);
  });
};


module.exports = fetchBreedDescription;