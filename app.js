const { db } = require('./models/index.js');
const express = require("express");
const morgan = require('morgan');
// Where your server and express add are being defined
const models = require('./models'); 
const path = require("path")
//const wikiRouter = require('./routes/wiki');
//const userRouter = require('./routes/user');
const router = require("express");

const PORT = 1337;

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + "stylesheets"));

db.authenticate().
  then(() => {
    console.log('connected to the database');
  })


const init = async () => {
  await models.User.sync()
  await models.Page.sync()
// Make sure that you have a PORT constant and to replace the name below with your express app
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
  });
}
init();
