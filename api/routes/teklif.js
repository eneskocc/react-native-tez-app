const express = require("express");
const router = express.Router();
const multer  = require('multer')
const app     = express()
const Teklif = require("../models/Teklif");

const upload = multer({ dest: 'uploads/' })

app.post('/photo/:filename', upload.single('avatar'), (req, res, next) => {
    const { path, mimetype } = req.file 
    const img = fs.readFileSync(path)
    console.log('path');
    const encodedImg = img.toString('base64')
    const finalImg = {
      contentType: mimetype,
      image:  new Buffer(encodedImg, 'base64')
    }

    console.log(finalImg);
    res.sendStatus(200)
  })

router.post("/", (req, res, next) => {
  const { name,price,photos,date,city,aktifMi } = req.body;
  const teklifr= new Teklif(req.body);
  movie.save((err, data) => {
    if (err) {
      console.log(err);
    }
    res.json(data);
  });
});

module.exports = router;