const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      let description = JSON.parse(body)[0]?JSON.parse(body)[0].description : undefined; 
      callback(null, description);
    }
  });
};


module.exports = {
  fetchBreedDescription
};
