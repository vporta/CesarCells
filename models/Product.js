var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
  name: String,
  amount: Number,
  currency: {
    type: String,
    default: 'USD'
  },
  forSale: {
    type: Boolean,
    default: true
  },
  user_id: [{ type: Schema.Types.ObjectId, ref: 'User' }]

});

var Product = mongoose.model('products', ProductSchema);

module.exports = Product;