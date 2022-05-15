const mongoose = require('mongoose');
const Schema  = mongoose.Schema;
const Teklif=require('../models/Teklif');
const TeklifSchema = new Schema({
	name: {
		type: String,
	},
	price: {
		type: Number,
		
	},
    photos:[],
    sure:{
        type:Date,
    },
	date:{
        type:Date,
        default:Date.now
    },
	city: {
		type: String,
	},
	aktifMi:Boolean,
    teklifler:[],

});

module.exports = mongoose.model('teklif', TeklifSchema);