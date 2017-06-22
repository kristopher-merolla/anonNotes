var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = mongoose.Schema({
	name        :{type: String, required: true, minlength: 4},
	topics      :Number,
	posts       :Number,
	comments    :Number
}, {timestamps: true})

var topicSchema = mongoose.Schema({
	name        :String,
	user_id     :String,
	category    :String,
	title       :String,
	description :String,
	posts       :Number
}, {timestamps: true})

var postsSchema = mongoose.Schema({
	name        :String,
	user_id     :String,
	topic_id    :String,
	comments    :Array,
	post        :String,
	like        :Number,
	dislike     :Number
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
mongoose.model("Posts", postsSchema);
mongoose.model("Comments", commentsSchema);