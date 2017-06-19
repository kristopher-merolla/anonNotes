var mongoose = require('mongoose');
var Note = mongoose.model('Note');
console.log("note", Note);

module.exports = {
    show: function (req, res) {
        Note.find({}, function (err, notes) {
            if (err) {
                console.log(err);
            } else {
                res.json(notes);
            }
        }).sort([['createdAt', 'descending']])
    },  
    create: function (req, res) {
        console.log('iniside create function', req.body);
        var note = new Note(req.body);
        note.save(function (err) {
            if (err) {
                res.json(false);
            } else {
                res.json(true);
            }
        })
    },/*
    vote: function(req, res){
        Quote.findOne({ _id: req.body.id }, function (err, quote) {
            if (err) {
                console.log(err);
            } else {
                var new_likes = parseInt(quote.likes) + parseInt(req.body.likes);
                Quote.update({ _id: quote.id }, { likes: new_likes }, function (err) {
                    if (err) {
                        console.log(err);
                    }
                    res.redirect('quotes');
                })

            }
        })
    }*/
}