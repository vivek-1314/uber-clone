const mongoose = require("mongoose") ;
const bcrypt = require("bcrypt");
require('dotenv').config();
const jwt = require("jsonwebtoken");

const userschema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3 , "first name should be at least 3 char long"],
        },
        lastname: {
            type: String,
            minlength: [3 , "last name should be at least 3 char long"],
        },
    },
        email: {
            type: String,
            required: true,
            unique: true,
            minlength: [5 , "email should be at least 5 characters"],
        },
        password: {
            type: String,
            required: true,
            select: false,
            minlength: [5 , "password should be at least 5 characters"],
        },
        socketid: {
            type: String,
        },
})

userschema.methods.generateAuthToken = function () {
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET , { expiresIn: "1d" });
    return token ;
}

userschema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password , this.password) ;
}

userschema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password , 10) ;
}

const usermodel = mongoose.model("users" , userschema) ;

module.exports = usermodel ;