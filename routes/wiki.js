const path = require("path")
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/user');


app.use('wiki', wikiRouter);
// or, in one line: app.user('/wiki', require('./routes/wiki');)
