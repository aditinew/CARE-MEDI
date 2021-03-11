var mongoose = require('mongoose');
var jwt=require('jsonwebtoken')
var Signup = mongoose.Schema({
    
    Firstname:String,
    Lastname:String,
    Username:String,
    Email:String,
    Phone:Number ,
    Password:{ type: String, required: true},
    Reconfirmpassword:String,
    
});

Signup.methods.generateJwt = function () {
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
  
    return jwt.sign({
      _id: this._id,
      exp: parseInt(expiry.getTime() / 1000),
    }, "MY_SECRET"); // DO NOT KEEP YOUR SECRET IN THE CODE!
  }

module.exports= mongoose.model('Signup',Signup);