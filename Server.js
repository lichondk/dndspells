const express = require('express');
const rout = require('./rout.js')
const app = express();
const port = process.env.PORT || process.argv[2] || 8080;

app.use('/spells', rout);

app.get('/', (req, res) => res.send('hello world!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
