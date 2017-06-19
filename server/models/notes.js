var mongoose = require('mongoose');

var noteSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 4 },
},{ timestamps: true })

mongoose.model('Note', noteSchema);