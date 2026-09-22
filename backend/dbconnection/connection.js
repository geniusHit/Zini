const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/rohit")
.then(()=>{
    console.log("Connection successful")
})
.catch((error)=>{
    console.log("Can't connect to mongodb : ", error)
})