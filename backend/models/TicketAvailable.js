const mongoose = require('mongoose');
const Schema=mongoose.Schema;
const TicketAvailable = new Schema({
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
    collection:'ticketavailable'

})
module.exports=mongoose.model('TicketAvailable',TicketAvailable);
