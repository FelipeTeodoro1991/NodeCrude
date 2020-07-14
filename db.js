const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name:String
    cuisine:String
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant; 
