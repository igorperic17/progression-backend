const express = require('express');
const app = express(); 
const bodyParser = require('body-parser');
const getDB = require('./src/db');

// GraphQL
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';

import 'reflect-metadata';

app.get("/", (req, res) => {
    res.send("We are on home");
});

app.use(bodyParser.json());
app.use(cors());

// const userRoute = require('./routes/UserRoute.ts');
// app.use("/user", userRoute);
// const songRoute = require('./routes/SongRoute.ts');
// app.use("/song", songRoute);
// const songTagRoute = require('./routes/SongTagRoute.ts');
// app.use("/tag", songTagRoute);

import schema from './src/schema/schema'
import songs from './src/models'

const server = new ApolloServer({
    schema: schema,
    playground: true,
    context: { models: { songs } } 
});

server.applyMiddleware({
    app,
    path: '/graphql'
});

app.listen({
    port: 3000
}, () => {
    console.log('Apollo Server running on http://localhost:3000/graphql')
});

// getDB();