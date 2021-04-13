const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController.js')

// get form register
router.get('/formAdmin', adminController.getRegister);

// add admin
router.post('/addAdmin', adminController.postAdmin);

// get all user  
router.get('/dashboard', adminController.getUsers);

// login admin
router.post('/loginAdmin', adminController.postloginAdmin);

// the admin update user
router.put('/updateUser/:_id', adminController.updateUser);

// delete user 
router.delete('/deleteUser/:_id', adminController.deleteUser);


module.exports = router;