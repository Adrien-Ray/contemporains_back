// TIME ZONE
process.env.TZ = 'Europe/Amsterdam';
const today = new Date();
console.info('the node date: ', today.toString());
// DEPENDENCIES
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
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
    res.send('hello node !');
});

const router = express.Router();
app.use('/users', router);
require('./src/controlers/users')(app, router);
