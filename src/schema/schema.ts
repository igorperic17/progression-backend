import {
  gql
} from 'apollo-server-express';

const linkSchema = gql`

    type Query {
        _: Boolean
    }
    type Mutation {
        _: Boolean
    }
    type Subscription {
        _: Boolean
    }

`;

// set up schemas and resolvers
import { makeExecutableSchema } from 'apollo-server-express';

// song
import songSchema from './song';
import songResolver from '../resolvers/song'

// songTag
// ...

const executableSchema = makeExecutableSchema({
    typeDefs: [linkSchema, songSchema],
    resolvers: [songResolver]
})

export default executableSchema;