const mongoose = require("mongoose")



const donorSchema = new mongoose.Schema ({

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

module.exports = mongoose.model("FoodDonor", donorSchema)








