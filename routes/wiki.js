const { Router } = require('express')
const path = require('path')
const { Page, User } = require('../models')
const { wikiPage, main, userList, userPages, addPage } = require('../views')
const router = new Router();

router.get('/', async (req, res, next) => {
  const allPages = await Page.findAll();
  res.send(main(allPages))
});

router.post('/', async (req, res, next) => {
  try {
    const [user, wasCreated] = await Page.findOrCreate({
      where: {
        name: req.body.name,
        email: req.body.email
      }
    })
    const page = await Page.create(req.body)
    page.setAuthor(user)           // await Page.save()
    res.redirect(`/wiki/${page.slug}`)  
  } catch (error) { next(error) }
});

router.get('/add', (req, res, next) => {
  const page = addPage();
  res.send(page)
});

router.get('/:slug', async (req, res, next) => {
  try {
    const page = await Page.findone({
      where: {
        slug: req.params.slug
      }
    })
    const author = await page.getAuthor()
    res.send(wikiPage(page, author))               // res.json(page)
  } catch(err) { next(err)}
})