const mongoose=require("mongoose")

const cartSchema=mongoose.Schema({
    email:{
        type:String
    },

    product_id:{
        type:String
    }
})

module.exports=mongoose.model("cart", cartSchema)