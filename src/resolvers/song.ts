import { v4 as uuid_v4 } from "uuid";

export default {
    Query: {
        songs: (parent, args, {
            models
        }) => {
            return Object.values(models.songs)
        },

        song: (parent, {
            id
        }, {
            models
        }) => {
            return models.songs[id]
        }
    },

    Mutation: {

        createNewSong: (parent, {
            title,
            artist,
            chords,
            progression
        }, {
            models
        }) => {
            const id = uuid_v4();
            const newSong = {
                id,
                title,
                artist,
                chords,
                progression
            };
            models.songs[id] = newSong;
            return newSong;
        },

        deleteSong: (parent, {
            id
        }, {
            models
        }) => {
            const {
                [id]: song, ...otherSongs
            } = models.song

            if (!song) {
                return false;
            }
            models.songs = otherSongs;
            return true;
        }
    }
}