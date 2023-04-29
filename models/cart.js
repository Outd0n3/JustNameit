const mongoose = require('mongoose');
const User = require('./user');
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  url: String,
  filename: String
});

ImageSchema.virtual('thumbnail').get(function () {
  return this.url.replace('/upload', '/upload/w_200');
});

const opts = { toJSON: { virtuals: true } };

const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  items: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
      },
      quantity: {
        type: Number,
        required: true,
        min: 1
      }
    }
  ],
  total: {
    type: Number,
    required: true,
    default: 0
  }
});

// const Cart = mongoose.model('Cart', cartSchema);

// module.exports = Cart;

// Path: JustNameIt\models\product.js
// const mongoose = require('mongoose');
// const Review = require('./review');
// const Schema = mongoose.Schema;

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  images: [ImageSchema],
  type: String,
});

const Product = mongoose.model('Product', productSchema);


const Cart = mongoose.model('Cart', cartSchema);

module.exports = Product;
module.exports = Cart;