const cardModel = require('../models/cardModel')

const createCard = async (req,res)=> {
    try{
        let saveData = await cardModel.create(req.body)
        res.status(200).send({ msg : saveData})
    }catch(error){
        res.status(500).send({msg: error.message })
    }
}

const getcard = async (req,res)=> {
    try{
        let saveData = await cardModel.find({status :'Active'})
        res.status(200).send({ msg : saveData})
    }catch(error){
        res.status(500).send({ msg: error.message})
    }
}


module.exports ={createCard,getcard}