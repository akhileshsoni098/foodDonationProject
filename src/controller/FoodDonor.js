const donorModel = require("../models/donerModel")




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

