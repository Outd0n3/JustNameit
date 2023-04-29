// const Campground = require('../models/campground');
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapBoxToken = process.env.MAPBOX_TOKEN;
const geocoder = mbxGeocoding({ accessToken: mapBoxToken });
const { cloudinary } = require("../cloudinary");
const cart = require('../models/cart');
// const Cart = require('../models/cart');


// Define the renderCart function
// const renderCart = async (req, res) => {
//   try {
//     const cart = await Cart.findOne({ user: req.user._id }).populate('items.product');
//     if (!cart) {
//       return res.render('cart', { items: [], total: 0 });
//     }
//     const items = cart.items;
//     const total = cart.total;
//     res.render('cart', { items, total });
//   } catch (err) {
//     console.log(err);
//     req.flash('error', 'Unable to render cart');
//     res.redirect('/');
//   }
// };

// // Export the renderCart function
// module.exports = {
//   renderCart
// };
// In this modified code, we first check if the "cart"


// module.exports.renderNewProduct = (req, res) => {
//     res.render('cart/newproduct');
// }

module.exports.createProduct = async (req, res, next) => {
    const product = new Product(req.body.product);
    product.images = req.files.map(f => ({ url: f.path, filename: f.filename }));
    product.author = req.user._id;
    await product.save();
    console.log(product);
    req.flash('success', 'Successfully made a new product!');
    res.redirect(`/campgrounds/${campground._id}`)
}




module.exports.renderNewProduct = async (req, res) => {
    const { id } = req.params;
    const campground = await Campground.findById(id)
    if (!campground) {
        req.flash('error', 'Cannot find that campground!');
        return res.redirect('/campgrounds');
    }

    res.render('campgrounds/newproduct', { campground });
}




module.exports.renderCart = (req, res) => {
  
    res.render('cart/cart');
}


