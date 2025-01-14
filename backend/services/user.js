const usermodel = require('../models/user') ;

module.exports.createuser = async ({
    firstname , lastname ,email , password
}) => {
    console.log(firstname , lastname , email , password) ;
    if(!firstname || !lastname || !email || !password){
        throw new Error(`User ${firstname , lastname , email, password} all are required`) ;
    }
    const user = await usermodel.create({
        fullname: {
            firstname ,
            lastname 
        }, 
        email , 
        password 
    })

    return user ;
}