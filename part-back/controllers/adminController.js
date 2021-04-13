const mongoose = require('mongoose');
const Admin = require('../models/Admin');
const User = require('../models/User')
const {validatRegisterAdmin, validatLoginAdmin} = require('../config/validatFormAdmin');
const bcrypt = require('bcrypt');

exports.getRegister = (req, res) =>{
    res.send({message : "register admin"})
};

exports.postAdmin = async (req, res) => {
    //validate form 
    const {error} = validatRegisterAdmin(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);
    }
    // check the admin
    const checkAdmin = await Admin.findOne({email : req.body.email});
    if (checkAdmin) {
        return res.status(400).send({message : "Email Alredy Exist"})
    }
    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    // save admin

    const admin = new Admin({
        _id : mongoose.Types.ObjectId(),
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email : req.body.email,
        password : hashPassword
    });
    const saveAdmin = await admin.save();
    try {
        res.status(200).send({message : "admin saved"})
    } catch (error) {
        res.status(400).send(error)
    }
};

exports.postloginAdmin = async (req, res) => {
    // validation
    const {error} = validatLoginAdmin(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const checkUser = await User.findOne({email : req.body.email});
    if (!checkUser) {
        return res.status(400).send({message : "Invalid Email"})
    }

    //compare password
    const passIsCorrect = await bcrypt.compare(req.body.password, checkUser.password);
    if (!passIsCorrect) {
        return res.status(400).send({message : "Invalid Password"})
    }else{
        res.status(200).send({message : "Loged In"})
    }
};

exports.getUsers = async (req, res) =>{
    try {
        const allUser = await User.find();

        res.status(200).json(allUser);
    } catch (error) {
        res.status(400).json({message : error.message})  
    }
};

exports.updateUser = async (req, res) => {
    const updateUser = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body
      }, (error, data) => {
        if (error) {
          return console.log(error);
        } else {
          res.json(data)
          console.log('Student updated successfully !')
        }
    })
    

};

exports.deleteUser = async (req, res) => {
    const deleteUser = await User.findByIdAndRemove(req.params.id, (err,data)=>{
        if (err) {
            return console.log(err);
          } else {
            res.json(data)
            console.log('Student deleted successfully !')
          }
    })
}