const express = require("express");
const config = require("config");
const mongoose = require("mongoose");


const app = express();
const PORT = config.get("port");

async function connectToDB()
{
    try
    {
       await mongoose.connect(config.get("mongoUri"), {
        userNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateInxed: true
       });
       app.listen(PORT, () => console.log("App has been started"));
    } catch(e)  
    {
        console.log("Server Error", e.message);
        process.exit(1);
    }
}

connectToDB();
//comment

