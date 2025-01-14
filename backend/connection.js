const mongoose = require("mongoose");

const connectingmongodb = (url) => {
    return mongoose.connect(url).then(() => {
        console.log("db connected successfully 💓")}).catch((err) => {
            console.log("error" , err) ;
    })
}

module.exports = {
    connectingmongodb
} ;