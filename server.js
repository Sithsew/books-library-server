const express = require('express')
const app = express()
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 3001;

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(PORT, () => {
  console.log(`App started on port: ${PORT}`);
});