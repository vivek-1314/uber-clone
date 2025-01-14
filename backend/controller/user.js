const usermodel = require("../models/user") ;
const {validationResult} = require("express-validator") ;
const userservice = require("../services/user") ;


const registeruser = async(req , res , next) => {
    const errors = validationResult(req) ;
    if(!errors.isEmpty()){
        return res.status(422).json({errors : errors.array()}) ;
    }
    const {fullname, email, password} = req.body ;

    const hasedpassword = await usermodel.hashPassword(password) ;

    const user = await userservice.createuser({
        firstname: fullname.firstname ,
        lastname: fullname.lastname ,
        email,
        password: hasedpassword
    }) ;

    const token = user.generateAuthToken();

    res.status(201).json({token , user});
}

module.exports = {
    registeruser
}