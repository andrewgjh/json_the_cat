const request = require('request');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const breedQuery = process.argv[2];

if (!breedQuery) {
  rl.question("You did not enter a breed of cat. Which breed of cat are you searching for?", (response) => {
    const query = "https://api.thecatapi.com/v1/breeds/search?q=" + response.trim();
    if (response === "") {
      console.log("You did not enter a search query.");
      rl.close();
      return;
    }
    request(query, function(error, response, body) {
      if (error) {
        console.log(error);
      } else if (body.length <= 2) {
        console.log("This breed does not exist.");
      } else {
        console.log('body:', JSON.parse(body)); // Print the HTML for the Google homepage.
      }
    });
    rl.close();
  });
} else {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedQuery}`, function(error, response, body) {
    if (error) {
      console.log(error);
    } else if (body.length <= 2) {
      console.log("This breed does not exist.");
    } else {
      console.log('body:', JSON.parse(body)); // Print the HTML for the Google homepage.
    }
  });
  rl.close();
}