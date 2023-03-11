const donorModel = require("../models/donerModel")


/* 
donorName:{
    type:String,
    required:true
},
foodType:{
    type:String,
    required:true
},
quantity:{
    type:Number,
    required:true
}, 
pickUpAddress:{   // from wherre to pick 
    type:String,
    required: true
},
pickUpDate:{   //  picking date 
    type:Date,
    required:true
},
recipientName:{   // receiver Name
    type:String,
    required:true
},
recipientAddress:{  // reciver address 
    type:String,
    required:true
},
recipientPhone:{
    type:String,
    required: true
},
status: {
    type: String,
    enum: ['pending', 'picked up', 'delivered'],
    default: 'pending'
  },
  notes: {
    type: String
  }
});

*/
const FoodDonor = async (req, res)=>{
try{
const data = req.body

const {donorName,foodType,quantity,pickUpAddress,pickUpDate,recipientName,recipientAddress,recipientPhone,notes } = data

if(!donorName){return res.status(400).send({status:false, message:" Please provide donorName "})}
if(!foodType){return res.status(400).send({status:false, message:"Please provide foodType "})}
if(!quantity){return res.status(400).send({status:false, message:" Please provide quantity"})}
if(!pickUpAddress){return res.status(400).send({status:false, message:"Please provide pickUpDate "})}
if(!pickUpDate){return res.status(400).send({status:false, message:" Please provide recipientName"})}
if(!recipientName){return res.status(400).send({status:false, message:" Please provide recipientAddress"})}
if(!recipientAddress){return res.status(400).send({status:false, message:"Please provide donorName "})}
if(!recipientPhone){return res.status(400).send({status:false, message:" Please provide recipientPhone"})}
if(notes){
if(!data.notes){
{return res.status(400).send({status:false, message:" Please provide notes"})}
}}


const createDonor = await donorModel.create(data)

res.status(201).send({status:true , message:" success" , data:createDonor})
}

catch(err){
    res.status(500).send({status:false , message:err.message})
}

}


module.exports = {FoodDonor}

