const request = require('request');
const breedQuery = () => {
  let query = process.argv[2];
  if (!query) {
    console.log("You did not entry a search query.")
    return;
  }
  request(`https://api.thecatapi.com/v1/breeds/search?q=${query}`, function (error, response, body) {
    if (error) {
      console.log(error);
    } else if (body.length <= 2) {
      console.log("This breed does not exist.");
    } else {
      console.log('body:', JSON.parse(body)); // Print the HTML for the Google homepage.
    }
  });
}
