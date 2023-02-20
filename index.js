const express = require('express')
const mongoose = require('mongoose');
const routes = require('./routes/routes');
require('dotenv').config();

const app = express()
const port = 3500
const mongoString = process.env.DATABASE_URL
app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", " GET, POST, PUT,DELETE,PATCH");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use('/api', routes);
mongoose.connect(mongoString);
const database = mongoose.connection

database.on('error', (error) => {
  console.log(error)
})

database.once('connected', () => {
  console.log('Database Connected');
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})