const express=require("express")
const app=express()
const nodemailer=require("nodemailer")
const signupModel=require("../models/signupSchema")
const adminModel=require("../models/adminSchema")
const productsModel = require("../models/productsSchema");
const cartModel=require("../models/cartSchema")
const buyModel=require("../models/buy")

exports.admin_signin=async(req, res)=>{
    const result=await adminModel.findOne(req.body)
    res.send(result)
}

exports.product=async (req, res)=>{
    const result=await new productsModel(req.body).save()
    res.send(result)
}

exports.signup=async (req, res)=>{
    let data=new signupModel(req.body)
    const result=await data.save()
    res.send(result)
}

exports.signin=async (req, res)=>{
    const email = req.params.email
    const result=await signupModel.findOne({email:email})
    res.send(result)
}

exports.uploadProduct=async (req, res) => {
    try {
        const obj = {
            img: req.body.img,
            category: req.body.category,
            title: req.body.title,
            rating: req.body.rating,
            bought: req.body.bought,
            discount: req.body.discount,
            price: req.body.price,
            oldPrice: req.body.oldPrice,
            emi: req.body.emi,
            about: req.body.about,
            details: req.body.details,
        };

        const result = await new productsModel(req.body).save();

        res.status(201).json({ message: "Product uploaded successfully", result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error uploading product", error });
    }
};

exports.showSearch=async (req, res)=>{
    try{
        let search=req.params.search
        search=search.replaceAll(" &", "")
        search=search.replaceAll(" in", "")
        search=search.replaceAll(" of", "")
        search=search.replaceAll(" and", "")
        search=search.replaceAll(" or", "")
        const searchSplit=search.split(",")
        const result=await productsModel.find({$or: searchSplit.map(term => ({
            $or: [
                { title: { $regex: term, $options: "i" } }, // Substring match
                { category: { $regex: term, $options: "i" } }
            ]
        }))})
        console.log("result = ", result)
        res.send(result)
    }
    catch(error)
    {
        console.log("Error : ", error)
    }
}

exports.addToCart=async (req, res)=>{
    try{
        const result=await new cartModel(req.body).save()
        res.send(result)
    }
    catch(error)
    {
        console.log("Product cannot be added to cart : ", error)
    }
}

exports.getCartInfo=async (req, res)=>{
    try{
        const email=req.params.email
        const result=await cartModel.find({email:email})
        res.send(result)
    }
    catch(error)
    {
        console.log("Could not find data from cart : ", error)
    }
}

exports.getProduct=async (req, res)=>{
    try{
        const id=req.params.id
        const result=await productsModel.findOne({_id:id})
        res.send(result)
    }
    catch(error)
    {
        console.log("Couldn't find product : ", error)
    }
}

exports.buy=async (req, res)=>{
    const result=await new buyModel(req.body).save()
    res.send(result)
}

exports.getPassword=async (req, res)=>{
    const mobile=req.params.mobile
    const result=await signupModel.findOne({mobile:mobile})
    res.send(result)
}

exports.changePassword=async (req, res)=>{
    const mobile=req.params.mobile
    const result=await signupModel.updateOne(
        {mobile:mobile}, 
        { $set:{password:req.body.password} }
    )

    res.send(result)
}

exports.sendOTP = async (req, res)=>{
    const email=req.params.email
    const otp=Math.ceil(Math.random()*1000000)

    const auth=nodemailer.createTransport({
        service:"gmail",
        secure:true,
        port:465,
        auth:{
            user:"rohitthakur792002@gmail.com",
            pass:"pnsg ismb vdou ccax"
        }
    })

    const receiver={
        from:"rohitthakur792002@gmail.com",
        to:`${email}`,
        subject:"EComm Signup OTP",
        text:`Your EComm Signup OTP is ${otp}`
    }

    auth.sendMail(receiver, (error, emailResponse)=>{
        if(error)
            throw error;
        console.log("success!")
        res.send({otp:otp})
    })
}