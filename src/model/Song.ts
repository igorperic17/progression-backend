
export default class Song {
    id: number;
    title: string;
    artist: string;
    chords: string;
    progression: string;

    constructor(title, artist, chords, progression) {
        this.title = title;
        this.artist = artist;
        this.chords = chords;

        this.progression = progression
    }
}

module.exports = {
    Song: Song
};