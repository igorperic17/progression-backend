import { Db } from "typeorm";
import { updateSourceFileNode } from "typescript";

const { convertCompilerOptionsFromJson } = require("typescript");

const express = require('express');
const app = express();
const router = express.Router();

const DB = require('../src/db');

require("reflect-metadata");
const { createConnection } = require("typeorm");
const { Song } = require("../src/model/Song");

router.get('/', async (req, res) => {

    const db = await DB.getInstance();
    const allSongs = await db.getRepository(Song).find();

    res.json(allSongs);
    
});

router.post('/', async (req, res) => {

    const db = await DB.getInstance();
    
    let songRepository = db.getRepository(Song);
    
    let song = new Song(
        req.body.title,
        req.body.artist,
        req.body.chords
    );
    console.log(song);
    try {
        const savedSong = await songRepository.save(song);
        res.json(savedSong);
    } catch (err) {
        console.log(err);
    };
    
    // res.send('New song added.');
});

module.exports = router;

export {};