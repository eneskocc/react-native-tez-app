const express = require("express");
const router = express.Router();
const Teklif = require("../models/Teklif");

router.get("/:sehir", (req, res, next) => {
  var sehir = req.params.sehir;
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


module.exports = router;
