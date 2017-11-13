const express = require('express')
const router = express.Router()
const Article = require('../models/articles.js')

router.get('/', (req, res) => {
  Article.find()
    .then(articles => res.render('index.pug', {
      'title': 'Starter App',
      'articles': articles
    }))
    .catch(err => console.log(err))
})

router.post('/', (req, res) => {
  const article = {
    title: req.body.title
  }
  
  Article.create(article)
    .then(res.redirect('/'))
    .catch(err => console.log(err))
})

module.exports = router
