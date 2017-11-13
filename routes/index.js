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
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
})

router.get('/:id', (req, res) => {
  Article.find({_id: req.params.id})
    .then(articles => res.render('article.pug', {
      'title': 'Article',
      'articles': articles
    }))
    .catch(err => console.log(err))
})

router.post('/:id', (req, res) => {
  const article = {
    title: req.body.title
  }

  Article.findByIdAndUpdate(
    {_id: req.params.id},
    {$set: {title: article.title}},
    {new: true}
  )
    .then(res.redirect('/'))
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
})

router.get('/:id/delete', (req, res) => {
  Article.remove({_id: req.params.id})
		.then(res.redirect('/'))
    .catch(err => console.log(err))
})

module.exports = router
