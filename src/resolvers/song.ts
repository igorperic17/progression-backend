// import { v4 as uuid_v4 } from "uuid";

export default {
    Query: {
        songs: async (parent, args, { models }) => {
            return await models.Song.findAll();
        },

        song: (parent, { id }, { models }) => {
            return models.Song.findByPk(id);
        }
    },

    Mutation: {

        createNewSong: async (parent, 
        { title, artist, chords, progression }, 
        { models }) => {
            // const id = uuid_v4();
            const newSong = {
                // id,
                title,
                artist,
                chords,
                progression
            };
            return await models.Song.create(newSong)
        },

        deleteSong: async (parent, { id }, { models }) => {
            return await models.Song.destroy({
                where: {
                    id
                }
            });
        },

        updateSong: async (parent, 
        { id, title, artist, chords, progression }, 
        { models }) => {
            await models.Song.update(
                { title, artist, chords, progression },
                { where: { id } }
            );
            const updatedSong = await models.Song.findByPk(id);
            return updatedSong;
        }
    }
}