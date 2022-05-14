const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const TekliflerSchema = new Schema({
	name: {
		type: String,
	},
	price: {
		type: Number,
		
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

module.exports = mongoose.model('teklifler', TekliflerSchema);