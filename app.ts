const express = require('express');
const app = express(); 
const bodyParser = require('body-parser');

app.get("/", (req, res) => {
    res.send("We are on home");
});

app.use(bodyParser.json());

const userRoute = require('./routes/UserRoute.ts');
app.use("/user", userRoute);
const songRoute = require('./routes/SongRoute.ts');
app.use("/song", songRoute);

app.listen(3000);


require("reflect-metadata");
const { createConnection } = require('typeorm');
// import User from "./src/entity/User";

createConnection().then(async connection => {

    // console.log("Inserting a new user into the database...");
    // const user = new User();
    // user.firstName = "Timber";
    // user.lastName = "Saw";
    // user.age = 25;
    // await connection.manager.save(user);
    // console.log("Saved a new user with id: " + user.id);

    // console.log("Loading users from the database...");
    // const users = await connection.manager.find(User);
    // console.log("Loaded users: ", users);

    console.log("DB connection established.");

}).catch(error => console.log(error));

