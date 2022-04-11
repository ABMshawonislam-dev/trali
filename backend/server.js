const express = require('express')
const bannerData = require('./bannerData')
const logoData = require('./logoData')
var cors = require('cors')
const app = express()


app.use(cors())

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get("/logo",function(req,res){
    res.send(logoData)
})

app.get("/banner",function(req,res){
    res.send(bannerData)
})

app.listen(8000,()=>{
    console.log("Server Running on nport 8000")
})

