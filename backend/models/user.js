const mongoose=require('mongoose')
var Schema=mongoose.Schema;

var UserSchema =new Schema({
    email: String,
    pwd : String
})

module.exports=mongoose.model('userUser',UserSchema)

/*
module.exports=momgoose.model('userUser',{
    email : String,
    pwd : String
})
*/