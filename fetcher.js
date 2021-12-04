const fs = require('fs')
const request = require('request');

let url = process.argv[2]
let path = process.argv[3];

request(url, (error, response, body) => {
  if (error) {
    console.error(error)
    return
  }
  fs.writeFile(`${path}`, body, err => {
    if (err) {
      console.error(err)
      return
    } else {
      console.log(`Downloaded ${response.headers["content-length"]} bytes to ${path} `);
    }
});
});
