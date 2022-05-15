const express = require("express");
const router = express.Router();
const Teklifler = require("../models/Teklifler");


router.post("/", (req, res, next) => {
  const { user_id,teklif_id,deger } = req.body;
  const teklifler= new Teklifler(req.body);
  movie.save((err, data) => {
    if (err) {
      console.log(err);
    }
    res.json(data);
  });
});

module.exports = router;