const customerModel = require('../models/customerModel')

const createCustomer = async function(req,res){
    try{
        console.log(req.body)
        let saveData = await customerModel.create(req.body);
        res.send({ msg : saveData})
    }catch(error){
        res.status(500).send({msg : error.message})
    }
}

const deleteCustomer = async function(req,res){
    try{
        let user = await customerModel.findOne({_id:req.params.id,status :'Active'})
        if(!user) return res.status(404).json({msg :" Customer not Exist!"})
        let saveData = await customerModel.findByIdAndUpdate(req.params.id,
            {$set :{ status: "InActive"}},
            {new :true})
        res.status(201).send({status:true, msg : saveData})
    }catch(error){
        res.status(500).send({msg : error.message})
    }
}

const fetchCustomer = async function(req,res){
    try{
        let saveData = await customerModel.find({status : 'Active'})
        res.status(200).send({status : true, msg: saveData})
    }catch(error){
        res.status(500).send({msg : error.message})
    }
}


module.exports = {createCustomer,fetchCustomer,deleteCustomer}