const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 8080
const router = require('./routes/route')
const path = require('path')


app.set('view engine' , 'ejs')
app.set('views' ,path.join(__dirname , 'views'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use('/',router)






app.listen(port , ()=> {
    console.log(`listening on ${port}`)
})