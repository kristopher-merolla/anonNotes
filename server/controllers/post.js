var mongoose = require('mongoose');
var Post = mongoose.model('Posts');

module.exports = (function() {
	return {
		// basic CRUD operations (boilerplate)
        create: function(req, res) {
            Post.create(req.body, function(err, output){
                if (err) {
                    res.json({message: "Error", error: err})
                }
                else {
                    res.json({message:"Success", post: output})
                }
            })
        },
        update: function(req, res) {
            Post.update({ _id: req.body._id }, req.body, function(err, output){
                if (err) {
                    res.json({message: "Error", error: err})
                }
                else {
                    res.json({message:"Success", post: output})
                }
            })
        },
        delete: function(req, res) {
            Post.remove({ _id: req.body._id })
            .then((data)=>{
                res.json({message: "Success"})
            })
            .catch((err)=>{
                res.json({message: "Error", error: err})
            })
        },
        show: function(req, res) {
            Post.findOne({_id: req.params.id})
            .then((friend)=>{
                res.json({message: "Success", post: post})
            })
            .catch((err)=>{
                res.json({message: "Error", error: err})
            })
        }
	}
})();