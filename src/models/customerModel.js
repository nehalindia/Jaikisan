const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    firstName: String,
    lastName :String,
    mobileNumber :String, 
    DOB : Date,
    email: { 
        type : String,
        required : true
    }, 
    address: String,
    status :{
        type: String,
        enum :['Active','InActive'],
        default : 'Active'
    }
},{ timestamps : true})

module.exports = mongoose.model('Customer', customerSchema)