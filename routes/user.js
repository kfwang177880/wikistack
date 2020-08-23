const { Router } = require('express');
const { Page, User } = require('../models')
const { userList, userPages } = require('../views')

const router = new Router();

router.get('/', async(req, res, next) => {
  try {
    const users = await User.findAll();
    res.send(userList(users))
  } catch (err) {next(err)}
});

router.get('/:userId', async (req, res, next) => {
  try {
      const users = await User.findByPk(req.params.userId, {include: page} );
      const pages = await users.pages
      res.send(userPages(user, pages))
    } catch(err) { next(err) }
  })
/*      const pages = await Page.findAll( {
        where: {
          authorId: req.params.userId
        } 
      })
      res.send(userPages(user, pages))
    } catch (err) {next(err)}
  });

  router.put('/:userId', async (req, res, next) => {
    try {
      const users = await User.findByPk(req.params.userId);
      users.name = req.params.name
      res.send(await User.save());
    } catch (err) {next(err)}
  });

  router.delete('/', async (req, res, next) => {
    try {
      const users = await User.findByPk(req.params.userId);
      res.send(await User.distroy());
    } catch (err) {next(err)}
  });
*/ 
module.exports = router