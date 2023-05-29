const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema({
    cardNumber : String,
    CardType : {
        type :String,
        enum :['Regular','Special']
    },
    customerName :String,
    status :{
        type: String,
        enum :['Active','InActive'],
        default : 'Active'
    },
    vision : String,
    customerId :{
        type : String,
        ref : 'Customer'
    }
},
 {timestamps : true})

 module.exports = mongoose.model('Card',cardSchema)