const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    song: String,
    albumn: String,
    cover: {type: String, default: 'https://cdn.tutsplus.com/net/uploads/legacy/958_placeholders/placehold.gif'}
});

const Songs = mongoose.model('Song', songSchema);

module.exports = Songs;
