const request = require('request');

const breedName = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

request(url, (error, resp, body) => {
  // console.log(body);
  // console.log(typeof body);

  if (error) {
    return console.log('Failed to request details: ', error);
  }

  const data = JSON.parse(body);
  
  const breed = data[0]; //why data[0], same as data?
  
  if (breed) console.log(breed.description);
  else console.log("Breed doesn't exist");

});

