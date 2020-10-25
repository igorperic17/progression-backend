const { Entity, PrimaryGeneratedColumn, Column} = require("typeorm");

@Entity()
export default class Song {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    artist: string;

    @Column()
    chords: string;

    constructor(title, artist, chords) {
        this.title = title;
        this.artist = artist;
        this.chords = chords;
    }

}

module.exports = Song;