const express = require('express')
const mongoose = require('mongoose');
const routes = require('./routes/routes');
require('dotenv').config();

const app = express()
const port = 3000
const mongoString = process.env.DATABASE_URL
app.use(express.json());
app.use('/api', routes);
mongoose.connect(mongoString);
const database = mongoose.connection

database.on('error', (error) => {
  console.log(error)
})

database.once('connected', () => {
  console.log('Database Connected');
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/fullname/:name', (req, res) => {
  res.send('Hello '+req.params.name)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})