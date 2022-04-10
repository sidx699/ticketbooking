const mongoose = require('mongoose');
const Schema=mongoose.Schema;
const Orders = new Schema({
    email:{
        type:String
    },
    tickets:{
        type:String
    },
    showName:{
        type:String
    },
    date:{
        type:String
    },
    cancelled:{
        type:Boolean
    }
},{ 
    collection:'orders'

})
module.exports=mongoose.model('Orders',Orders);

