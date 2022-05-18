const express = require("express");
const router = express.Router();
const Teklifler = require("../models/Teklifler");


router.post("/", (req, res, next) => {
  const { user_id,username,teklif_id,deger } = req.body;
  const teklifler= new Teklifler(req.body);
  movie.save((err, data) => {
    if (err) {
      console.log(err);
    }
    res.json(data);
  });
});

router.get('/:teklif_id',(req,res,next)=>{
  const promise=Teklifler.findById(req.params.teklif_id);
  promise.then((data) => {
    if(!data){
      next({message:'The teklifler was not found',code:1109})
    }
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
});


module.exports = router;