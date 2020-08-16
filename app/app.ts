// lib/app.ts
import express = require('express');

// Create a new express application instance
const app: express.Application = express();

app.get('/', function (req, res) {
    let sum = 0
    for (let i = 0; i <= 10000000; i++) {
        sum = i
    }
    res.status(200).send(`Hello World! ${sum}`);
});

module.exports = app;