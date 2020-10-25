const { convertCompilerOptionsFromJson } = require("typescript");

const express = require('express');
const router = express.Router();

require("reflect-metadata");
const { createConnection } = require("typeorm");
const Song = require("../src/entity/Song.ts");

router.get('/', (req, res) => {
    // return all songs
    res.send('List of all songs.');
});

router.post('/', async (req, res) => {
    let song = new Song({
        title: req.body.title,
        artist: req.body.artist,
        chords: req.body.chords
    });
    console.log(song);
    try {
        const savedSong = await song.save();
        res.json(savedSong);
    } catch (err) {
        console.log(err);
    };
    
    res.send('New song added.');
});

module.exports = router;

export {};