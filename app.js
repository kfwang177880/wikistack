const { db } = require('./models/index.js');
const express = require("express");
const morgan = require('morgan');
// Where your server and express add are being defined
const models = require('./models'); 
const { Router } = require('express');

const PORT = 1337;

const app = express();

app.use(morgan('dev'));

db.authenticate().
  then(() => {
    console.log('connected to the database');
  })

const init = async () => {
  await models.User.sync()
  await models.Page.sync()
// Make sure that you have a PORT constant and to replace the name below with your express app
  yourExpressAppVar.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
  });
}
init();

router.get('/', (req, res, next) => {
  res.send('got to GET /wiki/');
});

router.post('/', (req, res, next) => {
  res.send('got to POST /wiki/');
});

router.get('/add', (req, res, next) => {
  res.send('got to GET /wiki/add');
});
