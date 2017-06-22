var mongoose = require('mongoose');
var Topic = mongoose.model('Topics');

module.exports = (function() {
	return {
        index: function(req,res){ // pull ALL topics
            Topic.find({}, function(err, data){
                if(err){
                    res.json({message:"Error", error: err})
                }
                else {
                    res.json({message: "Success", topics: data})
                }
            })
        },
		// basic CRUD operations (boilerplate)
        create: function(req, res) {
            Topic.create(req.body, function(err, output){
                if (err) {
                    console.log("new topic NOT added ERR");
                    res.json({message: "Error", error: err})
                }
                else {
                    console.log("new topic added ELSE");
                    res.json({message:"Success", topic: output})
                }
            })
        },
        update: function(req, res) {
            Topic.update({ _id: req.body._id }, req.body, function(err, output){
                if (err) {
                    res.json({message: "Error", error: err})
                }
                else {
                    res.json({message:"Success", topic: output})
                }
            })
        },
        delete: function(req, res) {
            Topic.remove({ _id: req.body._id })
            .then((data)=>{
                res.json({message: "Success"})
            })
            .catch((err)=>{
                res.json({message: "Error", error: err})
            })
        },
        show: function(req, res) {
            Topic.findOne({_id: req.params.id})
            .then((friend)=>{
                res.json({message: "Success", topic: topic})
            })
            .catch((err)=>{
                res.json({message: "Error", error: err})
            })
        }
	}
})();