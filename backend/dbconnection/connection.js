const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/rohit")
.then(()=>{
    console.log("Connection successful")
})
.catch((error)=>{
    console.log("Can't connect to mongodb : ", error)
})

module.exports=async function connection(){
    try{
        const connectionParams={
            useNewUrIParser:true,
            useCreateIndex:true,
            useUnifiedTopology:true
        }
        await mongoose.connect(process.env.DB, connectionParams)
        console.log("Connected to database2")
    }
    catch(error)
    {
        console.log("Couldn't connect to database : ", error)
    }
}