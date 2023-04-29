const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');


mongoose.connect('mongodb://localhost:27017/MyYelp-camp', {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];


const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 300; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            author: '620ffe4650e4be4cd9c6122d',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'House on the Hill is an indie Horror Game developed by Steppe Hare Studio. A man hoping to provide an easy life for his wife and son is hired to break into a house and steal something valuable and sell it, and in the process, put him and his family on easy street.',
            price,
            geometry: {
                 type: "Point",
                 coordinates: [
                     cities[random1000].longitude,
                     cities[random1000].latitude,
                     
                ] 
                },
            images:  [
                {
                  url: 'https://res.cloudinary.com/aerologics/image/upload/v1645864912/YelpCamp/ikzhji7y36d8pbhm3iyc.png',
                  filename: 'YelpCamp/ikzhji7y36d8pbhm3iyc',
                },
                {
                  url: 'https://res.cloudinary.com/aerologics/image/upload/v1645864912/YelpCamp/kjo2kyq2u5b3i8tp33gi.jpg',
                  filename: 'YelpCamp/kjo2kyq2u5b3i8tp33gi',
                }
              ],
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})