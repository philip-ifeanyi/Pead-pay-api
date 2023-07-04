const express = require('express')
const app = express()
require("dotenv").config();
const run = require('./Config/mongoDBConfig')
const port = 5000

app.get('/api/v1/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
})
