// module.exports = func => {
//     return (req, res, next) => {
//         func(req, res, next).catch(next);
//     }
// }

module.exports = (func) => {
    return async (req, res, next) => {
      try {
        await func(req, res, next);
      } catch (error) {
        next(error);
      }
    };
  };