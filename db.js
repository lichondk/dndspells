
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;

const uri = process.env.MONGOLAB_URI || "mongodb+srv://admin:jju76fas@cluster0-2qpjx.mongodb.net/test?retryWrites=true&w=majority";
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




