const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/user_data")
    .then(() => console.log('Connected to database'))
    .catch((err) => console.log(err));

module.exports = { mongoose }; 
