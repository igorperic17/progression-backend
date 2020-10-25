require("reflect-metadata");
const { createConnection } = require('typeorm');
// import User from "./src/entity/User";

class DB {

    static getInstance = async () => {
        if (!DB._instance) {
            DB._instance = new DB();

            var connectionPromise = createConnection().then(async conn => {

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
    
                DB._instance.connection = conn;
                console.log('db stored.');
                
            }).catch(error => console.log(error));
            await connectionPromise;
        }
        console.log('db returned.');
        return DB._instance.connection;
    };
}

module.exports = DB;