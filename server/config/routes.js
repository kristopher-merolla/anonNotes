var mongoose = require('mongoose');
var notes = require('../controllers/notes.js');

module.exports = function (app) {
    /*app.get('/', function (req, res) {
        res.render('index');
    })*/
    app.get('/notes', function (req, res) {
        notes.show(req, res);
    })
    app.post('/addnote', function (req, res) {
        console.log('arrived to the server /addnote', req.body);
        notes.create(req, res);
    })
    /*app.post('/vote', function (req, res) {
        quotes.vote(req, res);
    })*/
    app.all("*", (req,res,next) => {
        res.sendfile(path.resolve("./public/dist/index.html"))
    });
}