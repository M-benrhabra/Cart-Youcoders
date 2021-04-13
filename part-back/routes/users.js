const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js')
const verify = require('../config/verifyToken')

// get register
router.get('/register', userController.getRegister);

//add user 
router.post('/addUser', userController.postUser);

// get logein
// router.get('/login', userController.getlogin);

//loged user 
router.post('/logedUser', userController.postlogin);

// get user 
router.get('/user/:_id',verify, userController.getInfoUser);



module.exports = router;