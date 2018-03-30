const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;

// MIDDLEWARE
app.use(express.static('public'));
app.use(express.json());

const songsController = require('./controllers/songs.js');
app.use('/songs', songsController);



app.get('/', (req,res)=>{
    res.send('Hello World');
});





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
