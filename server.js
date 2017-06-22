<<<<<<< HEAD
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('./server/config/mongoose.js');
=======
 // 
// REQUIRES
//
var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
>>>>>>> 0e23ecbab378201c79073e1f1d6124e60aea4069

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './public/dist')));

// ROUTES
var routes = require('./server/config/routes.js')(app);


app.listen(8000, function () {
    console.log('listening on port 8000');
})