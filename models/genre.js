var mongoose = require('mongoose');

//Genre schema
var genreSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    created_date : {
        type : Date,
        default : Date.now
    }
});

var Genre = module.exports = mongoose.model('Genre', genreSchema);

//Get genres
module.exports.getGenres = function(callback, limit){
    Genre.find(callback).limit(limit);
}

//Get genre by id
module.exports.getGenre = function(id, callback){
    Genre.findById(id, callback);
}

//Insert genre
module.exports.insertGenre = function(genre, callback){
    Genre.create(genre, callback);
}

//Update genre by id
module.exports.updateGenre = function(id, genre, options, callback){
    var query = { _id : id };
    var update = {
        name : genre.name
    }
    Genre.findOneAndUpdate(query, update, options,  callback)
}

//Delete genre
module.exports.deleteGenre = function(id, callback){
    var query = {_id : id};
    Genre.remove(query, callback);
}