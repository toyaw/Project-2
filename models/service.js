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

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const ServiceCollection = mongoose.model('Service', ServiceSchema)


//Export the model
module.exports = {
    getServiceByQuoteId,
    addService
  }