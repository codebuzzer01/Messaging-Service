const mongoose = require('mongoose')
const MsgSchema = new mongoose.Schema({
    FName:{
        type:String,
        required: true
    },
    
    message: {
        type: String,
        required: true
    },
   
    date:{
        type: Date,
        default: Date.now
    }

});
const User = mongoose.model('User', MsgSchema)
module.exports = User