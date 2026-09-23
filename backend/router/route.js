const express=require("express")
const app=express()
const route=express.Router()
const controller=require("../userController/controller")

route.post("/signup", controller.signup)

route.get("/signin/:email", controller.signin)

route.post("/adminsignin", controller.admin_signin)

route.post("/uploadproduct", controller.uploadProduct)

route.get("/showsearch/:search", controller.showSearch)

route.post("/addtocart", controller.addToCart)

route.get("/getcartinfo/:email", controller.getCartInfo)

route.get("/getproduct/:id", controller.getProduct)

route.post("/buy", controller.buy)

route.get("/getpassword/:mobile", controller.getPassword)

route.patch("/updatepassword/:mobile", controller.changePassword)

route.get("/sendotp/:email", controller.sendOTP)

module.exports=route