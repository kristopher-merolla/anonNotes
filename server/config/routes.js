var user = require('../controllers/user.js');
var comment = require('../controllers/comment.js');
var post = require('../controllers/post.js');
var topic = require('../controllers/topic.js');
const path = require('path');

module.exports = function (app) {
    app.get('/dashboard', function(req,res) {
        topic.index(req,res);
    });

    app.post('/userlogin', user.show);

    app.post('/usercreate', user.create);

    // app.get('/topic/:id')

    // app.get('/user/:id')

    // app.post('/dashboard')

    // app.get('/notes', function (req, res) {
    //     notes.show(req, res);
    // }),
    // app.post('/addnote', function (req, res) {
    //     console.log('arrived to the server /addnote', req.body);
    //     notes.create(req, res);
    // }),
    // app.post('/login', function (req, res) {
    //     console.log('arrived to the server /login', req.body);
    //     users.create(req, res);
    // }),
    
    // "Catch All" route, put at bottom of other routes
    app.all("*", (req,res,next) => {
        res.sendfile(path.resolve("./public/dist/index.html"))
    })
}