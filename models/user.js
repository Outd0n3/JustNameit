const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);












// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// const passportLocalMongoose = require('passport-local-mongoose');

// const UserSchema = new Schema({
// email: {
// type: String,
// required: true,
// unique: true
// },
// isGuest: {
// type: Boolean,
// default: false
// }
// });

// UserSchema.plugin(passportLocalMongoose);

// const User = mongoose.model('User', UserSchema);

// const newUser = new User({
// email: 'guest@example.com',
// isGuest: true
// });

// newUser.save()
// .then(() => console.log('Guest user created!'))
// .catch((err) => console.error(err));

// module.exports = User;