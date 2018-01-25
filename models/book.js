var mongoose = require('mongoose');

//Genre schema
var bookSchema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    genre : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    created_date : {
        type : Date,
        default : Date.now
    }
});

var Book = module.exports = mongoose.model('Book', bookSchema);

//Get books
module.exports.getBooks = function(callback, limit){
    Book.find(callback).limit(limit);
}

//Get single book
module.exports.getBook = function(id, callback){
    Book.findById(id, callback);
}

//Insert Book
module.exports.insertBook = function(book, callback){
    Book.create(book, callback)
}

//Update book
module.exports.updateBook = function(id, book, options, callback){
    var query = { _id : id };
    var update = {
        title : book.title,
        genre : book.genre,
        description : book.description
    }
    Book.findOneAndUpdate(query, update, options,  callback)
}

//Delete book
module.exports.deleteBook = function(id, callback){
    var query = {_id : id};
    Book.remove(query, callback);
}