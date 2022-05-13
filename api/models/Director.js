const mongoose=require('mongoose');
const Director=require('../models/Director');
const Schema=mongoose.Schema;
const DirectorSchema=mongoose.Schema({
    name:String,
    surname:String,
    bio:String,
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports=mongoose.model('director',DirectorSchema);