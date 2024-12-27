const mongoose=require("mongoose")

const buy=mongoose.Schema({
    email:{
        type:String
    },

    userName:{
        type:String
    },

    productsId:{
        type:[String]
    },

    date:{
        type:String
    }
})

module.exports=mongoose.model("buy", buy)