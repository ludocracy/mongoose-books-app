var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
     title: String,
     author: {
       type: Schema.Types.ObjectId,
       ref: 'Author'
     },
     image: String,
     releaseDate: String
 });

let Book = mongoose.model('Book', BookSchema);

module.exports = Book;
