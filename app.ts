const express = require('express');
const app = express(); 
const bodyParser = require('body-parser');
const getDB = require('./src/db');
require('dotenv').config();

// GraphQL
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';

import 'reflect-metadata';

app.get("/", (req, res) => {
    res.send("We are on home");
});

app.use(bodyParser.json());
app.use(cors());

import schema from './src/schema/schema'
import songs from './src/models'


import models, {
    sequelize
} from './src/models'

const server = new ApolloServer({
    schema: schema,
    playground: true,
    context: { models: models } 
});

server.applyMiddleware({
    app,
    path: '/graphql'
});

sequelize.sync().then( async () => {
    app.listen({
        port: 3000
    }, () => {
        console.log('Apollo Server running on http://localhost:3000/graphql')
    });
});

// getDB();