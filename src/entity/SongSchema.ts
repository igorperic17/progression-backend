const EntitySchema = require("typeorm").EntitySchema;
const { Song } = require("../model/Song");

module.exports = new EntitySchema({
    name: "Song",
    target: Song,
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        title: {
            type: "varchar"
        },
        artist: {
            type: "varchar"
        },
        chords: {
            type: "varchar"
        },
        progression: {
            type: "varchar",
            nullable: true
        }
    }
});