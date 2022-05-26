const mongoose = require('mongoose');
const Schema  = mongoose.Schema;
const Teklif=require('../models/Teklif');
const TeklifSchema = new Schema({
	name: {
		type: String,
	},
	user_id:Schema.Types.ObjectId,
	price: {
		type: Number,
		
	},
    photo: {
		type: String,
	},
	sure:Number,
	city: {
		type: String,
	},
    teklifler:[],

});

module.exports = mongoose.model('teklif', TeklifSchema);