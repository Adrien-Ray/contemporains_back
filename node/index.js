// TIME ZONE
process.env.TZ = 'Europe/Amsterdam';
const today = new Date();
console.info('the node date: ', today.toString());
// DEPENDENCIES
require('dotenv').config();
const express = require('express');
const cors = require('cors');
// const mysql = require('mysql');
// const { json } = require('express');

const app = express();
app.use(cors());
app.use(express.json());

// USE PORT
const port = 8080;

// RUN SERVER
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

// TEST RUN ROOT
app.get('/', (req, res) => {


    console.log(`tu tape sur node / !`);
    const now = new Date();
    const year = now.getFullYear();
    const month = ('0' + (now.getMonth() + 1)).slice(-2);
    const day = ('0' + now.getDate()).slice(-2);
    const hours = ('0' + now.getHours()).slice(-2);
    const minutes = ('0' + now.getMinutes()).slice(-2);
    const formattedDate = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes;
    res.send(`Hello node ! It's ${formattedDate} o'clock`);
});

// login user
app.post('/login', async (req, res) => {
    // const rb = req.body
    return res.status(200).json({ message: 'road of login' });
});
const router = express.Router();
app.use('/users', router);
require('./src/controlers/users')(app, router);
