/* Step 1
* TODO: import mongoose connection
*/
const mongoose = require('./connection.js')
/* Step 2
 *
 * TODO: create model schema 
  */
const ServiceSchema = new mongoose.Schema({
    name: {type: String, required: true, max: 100},
    price: {type: Number, required: true},
    QuoteId: mongoose.Types.ObjectId
})



//Export the model
module.exports = {
    getServiceByQuoteId,
    addService
  }