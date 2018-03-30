const mongoose = require('mongoose');

const songSchema = mongoose.Schema({
    song: String,
    albumn: String,
    cover: String
});

module.exports = mongoose.model ('Song' , songSchema);

//something
