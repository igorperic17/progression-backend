
export default class Song {
    id: number;
    title: string;
    artist: string;
    chords: string;

    constructor(title, artist, chords) {
        this.title = title;
        this.artist = artist;
        this.chords = chords;
    }
}

module.exports = {
    Song: Song
};