const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/user');
const { Router } = require('express');

app.use('wiki', wikiRouter);
// or, in one line: app.user('/wiki', require('./routes/wiki');)
