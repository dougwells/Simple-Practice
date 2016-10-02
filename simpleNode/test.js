var fs = require('fs');
var http = require('http');

var dogUrl = 'http://herepup.com/wp-content/uploads/2015/12/Dog-Advice-1-1.jpg';

console.log("Hello World!")

//__dirname = 'relative to location of this js file (test.js)'

fs.writeFile(__dirname + '/index.html', '<h1>Coding Rocks</h1>');
var dogFile = fs.createWriteStream(__dirname + '/cuteDog.jpg');

// get the dog photo
var request = http.get(dogUrl, function(response){
  response.pipe(dogFile);
});
