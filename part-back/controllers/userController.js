const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const {addUserValidation, loginUserValidation} = require('../config/validatFormUser');
require('dotenv/config');


exports.getRegister = (req, res) => {
    res.send({ message: "its the register form" });
};

exports.postUser = async (req, res) => {
    //validate data
    //res.send(addUserValidation(req.body));
    const {error } = addUserValidation(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message)   
    }

    //check the user if existe
    const existUser = await User.findOne({email : req.body.email});
    if (existUser ) {
        return res.status(400).send({message : "The Email Alredy exist"})
    }

    // hash password 
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    // save user 
    const user = new User({
        _id : mongoose.Types.ObjectId(),
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        adress : req.body.adress,
        phone : req.body.phone,
        email : req.body.email,
        password : hashPassword
    });
    const saveUser = await user.save();
    try {
        res.status(200).send({message : 'You are Saved'})
    } catch (error) {
        res.status(500).send(error)
    }

};

// exports.getlogin = (req, res) =>{
//     res.send({message : 'it is the login form'})
// };

exports.postlogin = async (req, res) =>{
    //validation the data
    const {error} = loginUserValidation(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);        
    };
    // if (error) throw error

    //check the user if not exist 
    const checkUser = await User.findOne({email : req.body.email});
    if (!checkUser) {
        return res.status(400).send({message : "Invalid Email"})
    }

    //compare password
    const passIsCorrect = await bcrypt.compare(req.body.password, checkUser.password);
    if (!passIsCorrect) {
        return res.status(400).send({message : "Invalid Password"})
    }
    
    // create and assign a token 
    const token = jwt.sign({_id : checkUser._id}, process.env.TOKEN_SECRET);
    res.header('key-token', token).send(token)
      
    res.status(200).send({message : "Loged In"})
    
}

exports.getInfoUser = async (req, res) => {
    const findInfo = await User.findById(req.params.id, (err, user) => {
        if (err) return next(err);
        res.json(user);
      })

    
}


