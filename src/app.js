const express = require("express");
const  config  = require("./config");
const surveyRouter = require(`./routes/survey`);
const app = express();



app.use(express.json());
app.use('/surveys', surveyRouter)




app.listen(config.port, ()=>{
    console.log(`Server is running on port ${config.port}`);
})