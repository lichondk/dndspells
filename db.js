
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;

const uri = process.env.MONGOLAB_URI
const client = new MongoClient(uri, { useNewUrlParser: true });

mongoose.connect(uri, {
  useNewUrlParser: true,
}). catch(error => handleError(error));

const db = mongoose.connection;
db.on("error", () => {
    console.log("> error occurred from the database");
});
db.once("open", () => {
    console.log("> successfully opened the database");
});

module.exports = mongoose;




