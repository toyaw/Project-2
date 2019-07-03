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
//const quoteApi = require('../models/quote.js')
const serviceApi = require('../models/service.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const serviceRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 
serviceRouter.get('/', (req, res) => {
    serviceApi.getAllServices()
    .then((services) => {
      res.render('quotes/quotes', {services})
    })
    .catch((err) => {
      res.send(err)
    })
})

serviceRouter.post('/', (req, res) => {
    serviceApi.addNewService(req.body)
    .then(() => {
      res.redirect('/services')
    })
    .catch((err) => {
      res.send(err)
    })
})

serviceRouter.get('/new', (req, res) => {
  res.render('services/newServiceForm')
})

serviceRouter.get('/:serviceId/edit', (req, res) => {
    serviceApi.getShop(req.params.serviceId)
    .then((service) => {
      res.render('/editServiceForm', {service})
    })
})

serviceRouter.get('/:serviceId', (req, res) => {
    serviceApi.getService(req.params.serviceId)
    .then((service) => {
      serviceApi.getServiceByQuoteId(quote._id)
        .then((service) => {
          res.render('quote/singleQuote', {quote, service})
        })
    })
})

serviceRouter.put('/:serviceId', (req, res) => {
    serviceApi.updateService(req.params.serviceId, req.body)
    .then(() => {
      res.redirect('/service')
    })
})

serviceRouter.delete('/:serviceId', (req, res) => {
    serviceApi.deletService(req.params.serviceId)
    .then(() => {
      res.redirect('/service')
    })
})

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
    serviceRouter
}