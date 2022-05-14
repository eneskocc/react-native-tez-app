const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User=require('../models/User');
/* GET home page. */
router.get('/', (req, res, next) =>{
  res.render('index', { title: 'Express' });
});

router.post('/register', (req, res, next) =>{
  const {username,password,name,surname,date,city,teklifler}=req.body;
  bcrypt.hash(password, 10, (err, hash) =>{
    const user =new User({
      username,
      password:hash,
	  name,
	  surname,
	  date,
	  city,
	  teklifler,
    });
    const promise=user.save();
  
    promise.then((result) => {
          res.json(result);
    }).catch((err) => {
          res.json(err);
  
    });
  });

});
router.post('/authenticate', (req, res) => {
	const { username, password } = req.body;

	User.findOne({
		username
	}, (err, user) => {
		if (err)
			throw err;

		if(!user){
			res.json({
				status: false,
				message: 'Authentication failed, user not found.'
			});
		}else{
			bcrypt.compare(password, user.password).then((result) => {
				if (!result){
					res.json({
						status: false,
						message: 'Authentication failed, wrong password.'
					});
				}else{
					const payload = {
						username
					};
					const token = jwt.sign(payload, req.app.get('api_secret_key'), {
						expiresIn: 720 // 12 saat
					});

					res.json({
						status: true,
						token
					})
				}
			});
		}
	});

});

module.exports = router;
