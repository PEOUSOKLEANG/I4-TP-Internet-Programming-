const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.static('html/EX4'));
app.get('/', (req, res) => {
  fs.readFile('./html/EX4/index4.html', 'utf8', (err, html) => {
    if (err) {
      res.status(500).send('Error reading file');
    } else {
      res.send(html);
    }
  });
});
app.listen(3000, () => {
  console.log('http://localhost:3000');
});