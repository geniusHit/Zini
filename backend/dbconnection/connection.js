const mongoose=require("mongoose")
const dns = require("node:dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

// mongoose.connect("mongodb://localhost:27017/rohit")
mongoose
.connect("mongodb+srv://rohitthakur792002_db_user:rZAwa3mCUMgrnnRj@cluster0.7hhtnwm.mongodb.net/ECommerce?appName=Cluster0")
.then(()=>{
    console.log("Connection successful")
})
.catch((error)=>{
    console.log("Can't connect to mongodb : ", error)
})