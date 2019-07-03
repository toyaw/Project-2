/* Step 1
* TODO: import mongoose connection
*/
const mongoose = require('./connection.js')
/* Step 2
 *
 * TODO: create model schema 
  */
const QuoteSchema = new mongoose.Schema({
  description: {
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
  serviceId: mongoose.Types.ObjectId,

  imgLink: String
})

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const QuoteCollection = mongoose.model('quote', QuoteSchema)


/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */
function getAllQuotes() {
    return QuoteCollection.find()
  }
 function getQuoteByQuoteId(quoteId) {
    return QuoteCollection.findById({quoteId: quoteId})
  }
  
  function addNewQuote(quoteObject) {
    return QuoteCollection.create(quoteObject)
  }

  function updateQuote(quoteId, updateQuote) {
    return ServiceCollection.findByIdAndUpdate(serviceId, updateService)
  } 

  function deleteQuote(quoteId) {
    return QuoteCollection.findByIdAndDelete(quoteId)
  }
  function deleteAllQuote() {
    return QuoteCollection.deleteMany()
  }
  
//Export the model
module.exports = {

    getAllQuotes,
    getQuoteByQuoteId,
    addNewQuote,
    updateQuote,
    deleteQuote,
    deleteAllQuote
  }