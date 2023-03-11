const express = require("express")

const router =  express.Router()

const foodDonoContro = require("../controller/FoodDonor")


router.post("/foodDonor", foodDonoContro.FoodDonor )



// router.get("/", (req, res)=>{
//     res.send({msg:"application is working great "})
// })



module.exports = router