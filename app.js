const { db } = require('./models/index.js');
const express = require("express");
const router = require("express");
const morgan = require('morgan');
// Where your server and express add are being defined
const models = require('./models'); 
const layout= require('./views/layout')

const app = express();

app.use(morgan('dev'));
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}))
app.use('/wiki', require('./routes/wiki'))
app.use('/user', require('./routes/user'))

db.authenticate().
  then(() => {
    console.log('connected to the database');
  })

const PORT = 3000; 
const init = async () => {
  await models.User.sync()
  await models.Page.sync()
// Make sure that you have a PORT constant and to replace the name below with your express app
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
  });
}
init();

router.get('/', (req, res, next) => {
  try {
    res.redirect('/wiki')
  }
  catch(err) { next(err) }
});

// Handle our errors
app.use((err, req, res, next) => {
  console.error(err.message)
  if (err.message === 404) {
      res.status(404).send('404 not found')
  } else {
      res.status(500).send('Internal Server Error')
  }
})