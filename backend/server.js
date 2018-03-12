const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')//to use cors first npm install and then move down
const app = express()
//importing model
var userUser = require('./models/user.js')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

var posts = [
    { message: 'hello' }, { message: 'hi' }, { message: 'hola' }
]
//using cors and its too simple
app.use(cors())

app.get('/details', (req, res) => {
    res.send(posts)
})

app.post('/register', (req, res) => {
    var userData = req.body;
    //insdie postman we are posting email and pwd as a json file
    //console.log(userData.email) 
    //console.log(userData.pwd)
    var user = new userUser(userData);
    user.save((err, result) => {
        if (err)
            console.log("saving user error")
    })
    res.sendStatus(200)
})

app.post('/login', (req, res) => {
    var userData = req.body//here we have the data entered by user to get access
    var user=userUser.findOne({email:userData.email})
    console.log(user)
})
//connect to mongoose
mongoose.connect('mongodb://localhost:27017/loginAppPS', (err) => {
    if (!err) { console.log("connected successfully yipeee!!!") }
})
app.listen(3000)