var Genre = require('../models/genre');

module.exports = (app) => {

    //Get genres
    app.get('/api/genres', (req, res)=>{
        Genre.getGenres((err, result)=>{
            if(err) console.log(err)

            res.json(result);
        })
    })

    //Get genre by id
    app.get('/api/genre/:_id', (req, res)=>{
        var id = req.params._id;
        Genre.getGenre(id, (err, result)=>{
            if(err) console.log(err)

            res.json(result)
        })
    })

    //Insert genre
    app.post('/api/genre', (req, res)=>{
        var dataForm = req.body;
        Genre.insertGenre(dataForm, (err, result)=>{
            if(err) console.log(err)

            res.json(result);
        })
    })

    //Update genre
    app.put('/api/genre/:_id', (req, res)=>{
        var id = req.params._id;
        var dataForm = req.body;
        Genre.updateGenre(id, dataForm, {}, (err, result)=>{
            if(err) console.log(err);
            res.json(result);
        })
    })

    //Delete genre
    app.delete('/api/genre/:_id', (req, res)=>{
        var id = req.params._id;
        Genre.deleteGenre(id, (err, result)=>{
            if(err) console.log(err);
            res.json(result);
        })
    })

}