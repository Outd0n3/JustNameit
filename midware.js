// const { productSchema } = require('./schemas.js');
// const ExpressError = require('./utils/ExpressError');
// const Product = require('./models/cart');

// module.exports.validateNewProduct = (req, res, next) => {
//     const { error } = productSchema.validate(req.body);
//     if(error){
//         const msg = error.details.map(el => el.message).join(',')
//         throw new ExpressError(msg, 400)
//     } else {
//         next();
//     }
// };

const { productSchema } = require('./schemas.js');
const ExpressError = require('./utils/ExpressError');
const Product = require('./models/cart');

module.exports.validateNewProduct = (req, res, next) => {
  const { error } = productSchema.validate(req.body);
  if(error){
    const msg = error.details.map(el => el.message).join(',')
    throw new ExpressError(msg, 400)
  } else {
    next();
  }
};