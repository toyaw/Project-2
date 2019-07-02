/* Step 1 import express
 *
 */
const express = require('express')

/* Step 2
 *
 * Import the api files from the models
 *
 * TODO: change the file path to the models file you'll need to use.
 * TODO: rename this from `templateApi` to something more sensible (e.g:
 * `shopsAPI`)
 *
 * NOTE: You may need to import more than one API to create the 
 * controller you need.
 * 
 */
const quoteApi = require('../models/quote.js')
const serviceApi = require('../models/service.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const quoteRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 
quoteRouter.get('/', (req, res) => {
  quoteApi.getAllQuotes()
    .then((quotes) => {
      res.render('quotes/quotes', {quotes})
    })
    .catch((err) => {
      res.send(err)
    })
})

quoteRouter.post('/', (req, res) => {
  quoteApi.addNewQuote(req.body)
    .then(() => {
      res.redirect('/quotes')
    })
    .catch((err) => {
      res.send(err)
    })
})

quoteRouter.get('/new', (req, res) => {
  res.render('quotes/newQuoteForm')
})

quoteRouter.get('/:quoteId/edit', (req, res) => {
  quoteApi.getShop(req.params.quoteId)
    .then((quote) => {
      res.render('quotes/editQuoteForm', {quote})
    })
})

quoteRouter.get('/:quoteId', (req, res) => {
  quoteApi.getQuoteByQuoteId(req.params.quoteId)
    .then((quote) => {
      serviceApi.getServiceByQuoteId(quote._id)
        .then((service) => {
          res.render('quote/singleQuote', {quote, service})
        })
    })
})

quoteRouter.put('/:quoteId', (req, res) => {
  quoteApi.updateQuote(req.params.quoteId, req.body)
    .then(() => {
      res.redirect('/quote')
    })
})

quoteRouter.delete('/:quoteId', (req, res) => {
  quoteApi.deleteQuote(req.params.quoteId)
    .then(() => {
      res.redirect('/quotes')
    })
})

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  quoteRouter
}