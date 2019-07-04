const fetchBreedDescription = require('./breedFetcher');

const breedName = process.argv[2];


const handler = (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
};

fetchBreedDescription(breedName, handler);
