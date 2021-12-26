//since mongoose is being used to create schema,so we require it
const mongoose = require('mongoose');
 // this lib mongoose has same instance as in moongose require in mongoose.js

const factorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
        // you can put multiple validation here
        // like phone should be of 10 digits
    },
    totalSales: {
        type: Number,
        required: true
    },
    targetSales: {
        type: Number,
        required: true
    }

});

// we need to define what collection should be called in database
const Factory = mongoose.model('contact' ,factorySchema);



module.exports = Factory;
