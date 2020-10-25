const express = require('express');
const app = express(); 
const bodyParser = require('body-parser');
const getDB = require('./src/db');

app.get("/", (req, res) => {
    res.send("We are on home");
});

app.use(bodyParser.json());

const userRoute = require('./routes/UserRoute.ts');
app.use("/user", userRoute);
const songRoute = require('./routes/SongRoute.ts');
app.use("/song", songRoute);

app.listen(3000);

// getDB();