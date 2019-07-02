/* Step 1
* TODO: import mongoose connection
*/
const mongoose = require('./connection.js')
/* Step 2
 *
 * TODO: create model schema 
  */
const ServiceSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true, 
        max: 100
    },
    price: {
        type: Number, 
        required: true
},
createdAt: {
    type: Date,
    default: Date.now
},

imgLink: String
})

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const QuoteCollection = mongoose.model('Quote', QuoteSchema)

/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */
function getAllQuote() {
    return QuoteCollection.find()
  }
 function getQuoteByQuoteId(quoteId) {
    return QuoteCollection.findById({quoteId: quoteId})
  }
  function getService(serviceId) {
    return ServiceCollection.findById(serviceId)
  }
  
  function addNewService(serviceObject) {
    return ServiceCollection.create(serviceObject)
  }

  function updateService(serviceId, updateService) {
    return ServiceCollection.findByIdAndUpdate(serviceId, updateService)
  } 

  function deleteService(serviceId) {
    return ServiceCollection.findByIdAndDelete(serviceId)
  }
  function deleteAllService() {
    return ServiceCollection.deleteMany()
  }
  
//Export the model
module.exports = {

    getAllServices,
    getServiceByQuoteId,
    getService,
    addNewService,
    updateService,
    deleteService,
    deleteAllServices
  }