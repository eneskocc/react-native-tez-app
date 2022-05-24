const express = require("express");
const router = express.Router();
const Teklif = require("../models/Teklif");
const User = require("../models/User");
router.post("/", (req, res, next) => {
  var sehir = req.body.sehir;
  const promise = Teklif.find({ city: sehir });
  promise
    .then((data) => {
      if (!data) {
        next({ message: "Hiçbir gönderi yok", code: 1109 });
      }
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post('/user',(req,res,next)=>{
  const promise=User.findById(req.body.user_id);
  promise.then((data) => {
    if(!data){
      next({message:'The movie was not found',code:1109})
    }
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
});


module.exports = router;
