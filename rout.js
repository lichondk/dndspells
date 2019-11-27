const Spells = require('./spellsModel');
const readFile = require('fs').readFile;
const csvjson = require('csvjson')
const express = require('express');
const router = express.Router();

router.get('/GetAllSpells', function(req, res){
  Spells.find().then(function(data){
    res.send(data)
  });
})

module.exports = router;
