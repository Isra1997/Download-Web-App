let mongoose=require('mongoose');



let UserSchema= new mongoose.Schema({
    Username: String,
    Email:String,
    Password: String
})

module.exports= mongoose.model('Usermodel',UserSchema);