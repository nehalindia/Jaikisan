const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const route = require('./routes/route')

dotenv.config()
app.use(express.json())
app.use(express.urlencoded({ extended : true}))

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser : true}).then(
    console.log('Database connected')
).catch(err => console.log(err.message))

app.use('/', route)

app.listen(process.env.PORT, function(){
    console.log(`server is started on ${process.env.PORT}`)
})