const express = require('express');
const router = express.Router();
const Songs = require('../models/song.js')


router.get('/', (req,res)=>{
    Songs.find({}, (err, foundSongs)=>{
        res.json(foundSongs);
    });
});


router.post('/', (req,res)=>{
    Songs.create(req.body, (err, createdSong)=>{
        res.json(createdSong);
    });
});

router.put('/:id', (req,res)=>{
    Songs.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedSong)=>{
        res.json(updatedSong);
    });
});

router.delete('/:id', (req,res)=>{
    Songs.findByIdAndRemove(req.params.id, (err, deletedSong)=>{
        res.json(deletedSong);
    });
});


module.exports = router;
