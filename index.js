const express = require("express");
const config = require("config");
const mongoose = require("mongoose");


const app = express();
const PORT = config.get("port");

app.use("/api/auth", require("./routes/auth.routes"))

async function connectToDB()
{
    try
    {
       await mongoose.connect(config.get("mongoUri"), {
        useUnifiedTopology: true
       });
       app.listen(PORT, () => console.log(`App has been started on port ${PORT}`));
    } catch(e)  
    {
        console.log("Server Error", e.message);
        process.exit(1);
    }
}

connectToDB();

