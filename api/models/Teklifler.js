const mongoose = require('mongoose');
const Schema  = mongoose.Schema;
const Teklifler=require('../models/Teklifler');
const TekliflerSchema = new Schema({
	user_id:Schema.Types.ObjectId,
    username:String,
    teklif_id:Schema.Types.ObjectId,
    deger:Number,
});

module.exports = mongoose.model('teklifler', TekliflerSchema);