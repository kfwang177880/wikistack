const { Router } = require('express');
const { Page, User } = require('../models')
const { userList, userPages } = require('../views')

const router = new Router();

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.send(userList(users))
  } catch (err) {next(err)}
});

router.get('/:userId', async (req, res, next) => {
    try {
      const users = await User.findById(req.params.userId);
      const pages = await Page.findAll( {
        where: {
          authorId: req.params.userId
        } 
      })
      res.send(userPages(user, pages))
    } catch (err) {next(err)}
  });
  
  router.post('/', async (req, res, next) => {
    try {
      const users = await User.findAll();
      res.send(userList(users))
    } catch (err) {next(err)}
  });

  router.put('/', async (req, res, next) => {
    try {
      const users = await User.findAll();
      res.send(userList(users))
    } catch (err) {next(err)}
  });

  router.delete('/', async (req, res, next) => {
    try {
      const users = await User.findAll();
      res.send(userList(users))
    } catch (err) {next(err)}
  });
  