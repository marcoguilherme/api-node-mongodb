var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var consign = require('consign');

var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

consign()
    .include('routes')
    .into(app)

mongoose.connect('mongodb://localhost:27017/bookstore')
var db = mongoose.connection;


module.exports = app;