const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const db = require('./db/db-connection.js');

const app = express();
const PORT = 8080;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json('Welcome to my blog!');
});

app.get('/posts', async (req, res) => {
    try{
        const { rows: posts } = await db.query('SELECT * FROM posts');
        console.log("Get in the server", posts);
        res.send(posts);

    } catch(error){
        console.log(error);
        return res.status(400).json({error});
    }
});

app.listen(PORT, () => console.log(`Hola! Server running on Port http://localhost:${PORT}`));