const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes/route")
const app = express()

app.use(express.json())

mongoose.connect("mongodb+srv://Akshay:akshay7798953554@akshaydb.e6tjw4w.mongodb.net/group14Database",{useNewUrlParser:true})

.then(()=>{(console.log("mongoDb is connect successfully"))})
.catch((err)=>{(console.log(err.message))})


app.use("/", routes)

app.listen(3001, ()=>{
    console.log("application is listen on port 3001")
}
 )


