const express = require("express");
const router = express.Router();
const Teklifler = require("../models/Teklifler");

router.post("/", (req, res, next) => {
  const { user_id, username, teklif_id, deger } = req.body;
  const teklifler = new Teklifler(req.body);
  teklifler.save((err, data) => {
    if (err) {
      console.log(err);
    }
    res.json(data);
  });
});

router.post("/getir", (req, res, next) => {
  const promise = Teklifler.find({
    teklif_id: req.body.teklif_id,
});
  promise
    .then((data) => {
      if (!data) {
        next({ message: "The teklifler was not found", code: 1109 });
      }
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});
router.post("/getirUser", (req, res, next) => {
  const promise = Teklifler.find({
    user_id: req.body.user_id,
});
  promise
    .then((data) => {
      if (!data) {
        next({ message: "The teklifler was not found", code: 1109 });
      }
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
