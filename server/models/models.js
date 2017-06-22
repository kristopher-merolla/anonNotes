var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = mongoose.Schema({
	name        :{type: String, required: true, minlength: 4}, // server side validation
	topics      :Number,
	posts       :Number,
	comments    :Number
}, {timestamps: true})

var topicSchema = mongoose.Schema({
	title       :String,
	description :String,
	comments    :Number,
	user		:String,
	user_id     :String,
}, {timestamps: true})

var commentsSchema = mongoose.Schema({
	name        :String,
	user_id     :String,
	topic_id    :String,
	post_id     :String,
	comment     :String
}, {timestamps: true})

mongoose.model("Users", userSchema);
mongoose.model("Topics", topicSchema);
mongoose.model("Comments", commentsSchema);