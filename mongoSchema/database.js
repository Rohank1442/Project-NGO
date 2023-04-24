const mongoose = require("mongoose");

const { config } = require('dotenv');
config();

 class Database {
    constructor() {
        this.connection();
    }

    async connection() {
        mongoose.set('strictQuery', false);
        try {
            // const uri = "";
            await mongoose.connect(process.env.url);
            console.log("connected to mongodb");
        }
        catch (error) {
            console.log(error);
        }

    }
}
module.exports = new Database();