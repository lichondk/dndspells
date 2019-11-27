const express = require('express');
const rout = require('./rout.js')
const Spells = require('./spellsModel');
const app = express();
const port = process.env.PORT || process.argv[2] || 8080;

app.use('/spells', (req, res) => {
    Spells.find().then(function(data){
        res.send(data)
      });
});

app.get('/', (req, res) => res.send('hello world!'))

app.get('/test', (req, res) => res.send('test'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
