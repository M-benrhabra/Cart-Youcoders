const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    _id : Schema.Types.ObjectId,
    firstName : {
        type : String,
        required : true,
        min : 4
    },
    lastName : {
        type : String,
        required : true,
        min : 4
    },
    adress : {
        type : String,
        required : true,
        min : 6
    },
    phone : {
        type : String,
        required : true,
    },
    email : {
        type: String,
        required : true,
        min : 6
    },
    password : {
        type: String,
        required : true,
        min : 6
    },
    created_at : {
        type: Date,
        default : Date.now()
    } 
});

module.exports = mongoose.model('user', userSchema); 