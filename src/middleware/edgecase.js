const customerModel = require('../models/customerModel')
const cardModel = require('../models/cardModel')

const customer = async function(req,res,next){
   try{
        let data = req.body
        if(!data.DOB) return res.status(404).json({msg :" Add Date of Birth"})
        data.DOB = new Date(data.DOB);
        if(!data.firstName && !data.lastName) return res.status(404).json({msg :" Pls add the name!"})
        if(!data.address) return res.status(404).json({msg :" Pls add the Address!"})
       
        if((data.mobileNumber).length != 10) return res.status(404).json({msg :" Pls add proper Mobile Numbe!"})
        let mobile = await customerModel.findOne({mobileNumber :data.mobileNumber })
        if(mobile) return res.status(404).json({msg :" Mobile number is already Exist!"})
       
        if(!data.email) return res.status(404).json({msg :" Pls add the Email!"})
        if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(data.email)) {
            return res.status(400).send({msg: 'Invalid email format'})
        }

        let emailcheck = await customerModel.findOne({ email :data.email})
        console.log(emailcheck, data.email)
        if(emailcheck) return res.status(404).json({msg :" Email Id is already Exist!"})
        next()
    }catch(error){
        res.status(500).send({msg : error.message})
    }
}

const card = async (req,res,next)=>{
    try{
        let data = req.body
        if(!data) return res.status(404).send({ status : false, msg : " Add data of card!"})
       
        if(!data.CardType) return res.status(404).send({ status : false, msg : " Add Type of card!"})
        if(!['Regular','Special'].includes(data.CardType))return res.status(404).send({ status : false, msg : "Type of card Not Valid!"})
       
        if(!data.customerName) return res.status(404).send({ status : false, msg : " Add Name!"})
        if(!data.vision) return res.status(404).send({ status : false, msg : " Vision is missing!"})
        if(!data.customerId) return res.status(404).send({ status : false, msg : " customer Id is missing!"})
        
        let result = await  cardModel.find().count()
        result++ 
        let arr = (result+"").split("")
        if(arr.length == 1) req.body["cardNumber"] = "C00"+ result 
        else if(result.length == 2) data.cardNumber = "C0"+ result
        else if(result.length == 3) data.cardNumber = "C"+ result
        // console.log(req.body)
        next()
    }catch(error){
        res.status(500).send({msg : error.message})
    }
}


module.exports = {customer,card}