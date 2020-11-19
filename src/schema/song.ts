import {
  gql
} from 'apollo-server-express';

export default gql`
    extend type Query {
        songs: [Song!]
        song(id: ID!): Song!
    }

    extend type Mutation {
        createNewSong(artist: String!, title: String!, chords: String!, progression: String!): Song!
        updateSong(id: ID!, artist: String!, title: String!, chords: String!, progression: String!): Song!
        deleteSong(id: ID!): Boolean!
    }

    type Song {
        id: ID!
        title: String!
        artist: String!
        chords: String!
        progression: String!
    }
`;

// import SongTag from './SongTag';

// export default class Song {

//     id: number;

//     title: string;
//     artist: string;
//     chords: string;
//     progression: string;
    
//     tags: SongTag[];
// }

// module.exports = Song;
