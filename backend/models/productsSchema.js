const mongoose=require("mongoose")

const productsSchema=mongoose.Schema({
    img:{
        type:[String]
    },

    category:{
        type:String
    },

    title:{
        type:String
    },

    rating:{
        type:String
    },

    bought:{
        type:String
    },

    discount:{
        type:String
    },

    price:{
        type:String
    },

    oldPrice:{
        type:String
    },

    emi:{
        type:String
    },

    about:{
        type:String
    },

    details:{
        type:String
    },
})

module.exports=mongoose.model("product", productsSchema)