const mongoose = require('mongoose');
const Schema=mongoose.Schema;
const User = new Schema({
    name:{
        type:String
    },
    phoneNumber:{
        type:Number
    },
    email:{
        type:String
    },
    password:{
        type:String
    }   
},{ 
    collection:'user'

})
module.exports=mongoose.model('User',User);
