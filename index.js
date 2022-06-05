const express = require("express");
const config = require("config");
const mongoose = require("mongoose");


const app = express()
const PORT = config.get("port")

app.use(express.json({extended: true}))
app.use("/api/auth", require("./routes/auth.routes"))
app.use('/api/link', require('./routes/link.routes'))
app.use('/t/', require('./routes/redirect.routes'))


async function connectToDB()
{
    try
    {
       await mongoose.connect(config.get("mongoUri"), {
           // useNewUrlParser: true,  почему нет?
                   useUnifiedTopology: true
           // useCreateIndex: true  почему нет?
       });
       app.listen(PORT, () => console.log(`App has been started on port ${PORT}`));
    } catch(e)  
    {
        console.log("Server Error", e.message);
        process.exit(1);
    }
}

connectToDB();

