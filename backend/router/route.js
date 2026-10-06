const express=require("express")
const app=express()
const route=express.Router()
const controller=require("../userController/controller")

route.post("/signup", controller.signup)

route.post("/signin", controller.signin)

route.post("/adminsignin", controller.admin_signin)

route.post("/uploadproduct", controller.uploadProduct)

route.post("/showsearch", controller.showSearch)

route.post("/addtocart", controller.addToCart)

route.post("/getcartinfo", controller.getCartInfo)

route.post("/getproduct", controller.getProduct)

route.post("/buy", controller.buy)

route.post("/getpassword", controller.getPassword)

route.post("/updatepassword", controller.changePassword)

route.post("/sendotp", controller.sendOTP)

module.exports=route