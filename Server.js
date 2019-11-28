const express = require('express');
const cors = require('cors');
const Spells = require('./spellsModel');
const app = express();

const port = process.env.PORT || process.argv[2] || 8080;

app.use(cors({
  origin: 'https://dnddevfrontend.herokuapp.com/'
}));

app.get('/spells', (req, res) => {
    Spells.find().then(function(data){
        res.send(data)
      });
});



app.get('/', (req, res) => res.send('hello world!'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
