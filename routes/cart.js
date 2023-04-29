const express = require('express');
const router = express.Router();
const cart = require('../controllers/cart');
const catchAsync = require('../utils/catchAsync');
const {validateProductForm} = require('../middleware');
const {isLoggedIn, isAuthor} = require('../middleware');
const multer = require('multer');
const { storage } = require('../cloudinary');
const upload = multer({ storage });


router.get('/', isLoggedIn, catchAsync(cart.renderCart));

// router.post('/:id/newproduct', upload.array('image'), validateNewProduct, catchAsync(cart.createProduct));

router.post('/:id/newproduct', upload.array('image'), validateProductForm, catchAsync(cart.createProduct));



router.get('/:id/newproduct', (isLoggedIn, isAuthor, catchAsync(cart.renderNewProduct)));
    // .get(isLoggedIn, isAuthor, catchAsync(cart.renderNewProduct))
    // .post(upload.array('image'), validateNewProduct, catchAsync(cart.createProduct));

module.exports = router;
// debugger;
// router.route('/')
//     .get(catchAsync(cart.renderCart, { items, total }))


// router.route('/')
//     .get(res.render('shopping-cart', { items, total }));
    // .post(isLoggedIn, upload.array('image'), validateCampground, catchAsync(campgrounds.createCampground))

// router.get('/cart', isLoggedIn, cart.renderCart)
// router.route('/cart')
//     .get(cart.renderCart)
    // .post(passport.authenticate('local', {failureFlash: true, failureRedirect: '/login'}), users.login);

// router.get('/logout', users.logout);

