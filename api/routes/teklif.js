const express = require("express");
const router = express.Router();
const Teklif = require("../models/Teklif");



router.post("/", (req, res, next) => {
  const { name,user_id,price,photos,date,city } = req.body;
  const teklif= new Teklif(req.body);
  teklif.save((err, data) => {
    if (err) {
      console.log(err);
    }
    res.json(data);
  });
});


router.get('/:user_id',(req,res,next)=>{
  const promise=Teklif.findById(req.params.user_id);
  promise.then((data) => {
    if(!data){
      next({message:'The teklif was not found',code:1109})
    }
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
});


module.exports = router;