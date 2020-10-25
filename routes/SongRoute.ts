
const express = require('express');
const router = express.Router();

require("reflect-metadata");
const { createConnection } = require("typeorm");
const Song = require("../src/entity/Song.ts");

router.get('/', (req, res) => {
    // return all songs
    res.send('List of all songs.');
});

router.post('/', (req, res) => {
    console.log(Song);
    let song = new Song({
        title: 'asd',
        artist: 'asdasd',
        chords: 'aasdasdasdad'
    });
    res.send('New song added.');
    console.log(req.body);
});

module.exports = router;
