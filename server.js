const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;
const moment          = require ( 'moment' );
const morgan          = require ( 'morgan' );

// MIDDLEWARE
app.use(express.json());
app.use(express.static('public'));


const songsController = require('./controllers/songs.js');
app.use('/songs', songsController);
app.use ( morgan ( 'tiny' ) );






mongoose.connect('mongodb://localhost:27017/SongSaver');
mongoose.connection.once('open', ()=>{
    console.log('*********************');
    console.log('Connected to Mongoose');
    console.log('*********************');
});

app.listen(port, ()=>{
    console.log('=====================');
    console.log('Listening on Port: ' + port);
    console.log('=====================');
})
