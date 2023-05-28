const express = require('express')
const router = express.Router()

const {createCustomer,fetchCustomer,deleteCustomer} = require('../controller/customerController')
const {createCard,getcard} = require('../controller/cardController')
const {customer,card} = require('../middleware/edgecase')

router.post('/newcustomer',customer, createCustomer)
router.get('/getdata', fetchCustomer)
router.put('/delete/:id',deleteCustomer)

router.post('/newcard', card,createCard)
router.get('/getcard', getcard)

module.exports = router