var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
     title: String,
     author: String,
     image: String,
     releaseDate: Date
    // you should fill the rest of this in
 });

let Book = mongoose.model('Book', BookSchema);

module.exports = Book;
