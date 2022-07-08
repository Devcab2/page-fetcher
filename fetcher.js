const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2);
let URL = args[0];
const fileName = args[1];

request(URL, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    fs.writeFile(fileName, body, function(err) {
      if (err) {
        console.log("File cannot be made ");

        console.log("File already exists");
      } else {
        console.log(`Doanloaded + saved ${fs.statSync(fileName).size} bytes to ${fileName}`);
      }
    });
  }
});