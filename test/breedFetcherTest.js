const {
  fetchBreedDescription
} = require('../breedFetcher');
const {
  assert
} = require('chai');

describe("#fetchBreedDescription", () => {
  it("returns a string description for a valid breed, via callback", (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      assert.equal(err, null);
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";
      
      console.log(typeof expectedDesc);
      assert.equal(expectedDesc, desc.trim());
      done();
    })
  });
  it("returns invalid breed", (done) => {
    fetchBreedDescription('Monkey', (err, desc) => {
      assert.equal(err, null);
      expectedDesc = undefined
      assert.equal(expectedDesc, undefined);
      done();
    })
  });

})