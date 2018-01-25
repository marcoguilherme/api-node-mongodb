var Book = require('../models/book');

module.exports = (app) => {

    //Get book
    app.get('/api/books', (req, res)=>{
        Book.getBooks((err, result)=>{
            if(err) console.log(err)
            res.json(result);
        })
    })

    //Get book
    app.get('/api/book/:_id', (req, res)=>{
        var codigo = req.params._id;
        Book.getBook(codigo, (err, result)=>{
            if(err) console.log(err)
            res.json(result);
        })
    })

    //Insert book
    app.post('/api/book', (req, res)=>{

        var dataForm = req.body;

        Book.insertBook(dataForm, (err, result)=>{
            if(err) console.log(err)
            res.json(result);
        })
    })

    //Update book
    app.put('/api/book/:_id', (req, res)=>{
        var id = req.params._id;
        var dataForm = req.body;
        Book.updateBook(id, dataForm, {}, (err, result)=>{
            if(err) console.log(err);
            res.json(result);
        })
    })

    //Delete book
    app.delete('/api/book/:_id', (req, res)=>{
        var id = req.params._id;
        Book.deleteBook(id, (err, result)=>{
            if(err) console.log(err);
            res.json(result);
        })
    })

}