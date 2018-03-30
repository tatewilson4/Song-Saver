const mongoose = require('mongoose');


const songSchema = new mongoose.Schema({
    song: String,
    albumn: String,
    cover: String
});


const Songs = mongoose.model('Song' , songSchema);
module.exports = Songs;

