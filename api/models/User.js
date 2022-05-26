const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const UserSchema = new Schema({
	username: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		minlength: 5,
	},
	avatar:{
		type:String,

	},
	name: {
		type: String,
	},
	surname: {
		type: String,
		
	},
	date:{
        type:Date,
    },
	city: {
		type: String,
	},
	teklifler: [],

});

module.exports = mongoose.model('kullanci', UserSchema);