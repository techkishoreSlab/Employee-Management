const mongoose=require('mongoose')

module.exports = mongoose.model('Employee',{
    
    firstName:{type:String}, 
    lastName:{type:String}, 
    email:{type:String},
    dob:{type:String},
    gender:{type:String},
    education:{type:String},
    company:{type:String},
    experience:{type:Number},
    package:{type:Number},
   
})
