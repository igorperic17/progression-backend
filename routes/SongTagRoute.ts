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
const { SongTag } = require("../src/model/SongTag");

router.get('/', async (req, res) => {
    const db = await DB.getInstance();
    const allSongTags = await db.getRepository(SongTag).find();
    res.json(allSongTags);
});

router.post('/', async (req, res) => {
    const db = await DB.getInstance();
    let songTagRepository = db.getRepository(SongTag);
    
    let songTag = new SongTag(
        req.body.text
    );
    
    try {
        const savedSongTag = await songTagRepository.save(songTag);
        res.json(savedSongTag);
    } catch (err) {
        console.log(err);
    };
});

router.delete('/:songID', async (req, res) => {
    const db = await DB.getInstance();
    let songTagRepository = db.getRepository(Song);

    try {
        const removedSongTag = await songTagRepository.remove({id: req.params.songTagID});
        res.json(removedSongTag);
    } catch (err) {
        res.json(err);
    }
});

module.exports = router;

export {};