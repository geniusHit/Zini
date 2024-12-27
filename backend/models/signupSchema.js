const mongoose=require("mongoose")
const signupSchema=mongoose.Schema({
    username:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
})
const signupModel=mongoose.model("signup", signupSchema)
module.exports=signupModel