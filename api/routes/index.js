const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fileUpload = require("express-fileupload");
router.use(fileUpload());
const User = require("../models/User");
/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Express" });
});

router.post("/photo", (req, res) => {
  let sampleFile;
  let uploadPath;

  sampleFile = req.files.myImage;
  let name = (Math.random() + 1).toString(36).substring(2)+sampleFile.name;

  uploadPath = 'uploads/'+name;

  sampleFile.mv(uploadPath, function (err) {
    res.send(JSON.stringify({ STATUS: true,NAME:name}));
  });
});

router.post("/register", (req, res, next) => {
  const { username, password, avatar, name, surname, date, city, teklifler } =
    req.body;

  console.log(avatar);
  bcrypt.hash(password, 10, (err, hash) => {
    const user = new User({
      username,
      password: hash,
      avatar,
      name,
      surname,
      date,
      city,
      teklifler,
    });
    const promise = user.save();

    promise
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  });
});
router.post("/authenticate", (req, res) => {
  const { username, password } = req.body;

  User.findOne(
    {
      username,
    },
    (err, user) => {
      if (err) throw err;

      if (!user) {
        res.json({
          status: false,
          message: "Authentication failed, user not found.",
        });
      } else {
        bcrypt.compare(password, user.password).then((result) => {
          if (!result) {
            res.json({
              status: false,
              message: "Authentication failed, wrong password.",
            });
          } else {
            const payload = {
              username,
            };
            const token = jwt.sign(payload, req.app.get("api_secret_key"), {
              expiresIn: 720, // 12 saat
            });

            res.json({
              status: true,
              token,
              user,
            });
          }
        });
      }
    }
  );
});

module.exports = router;
