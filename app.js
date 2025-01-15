const express = require('express');
const tasks = require('./routes/tasks');
const { connectDB } = require('./db/connect');
require('dotenv').config();

const app = express();
const port = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/v1/tasks',tasks)



const start = async () => {
    try { 
        await connectDB(process.env.MONGO_URI);
        app.listen(port, (req, res) => {
            console.log(`Server started at port: ${port}`)
        })
    }
    catch (err) {
console.log(err);
    }
}

start();




