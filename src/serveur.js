const express = require('express');
const fs = require('fs');
const app = express();

app.post('/infoAgent',  (req, res) => {
  fs.writeFile('./infoAgent.json', JSON.stringify(req),(err) => {
    if (err) {
      console.log(err);
      return;
    };
  //console.log("file created");
  });
  res.send('Hello World!');
});

app.listen(3000,  () => {
  console.log('Example app listening on port 3000!')
});
