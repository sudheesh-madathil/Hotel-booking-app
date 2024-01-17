const express = require("express")
const router = express.Router()
const Schema = require("../model_schema/Adress")


router.post("/", async(req,res)=>{
    const Address = new Schema({
        contry:req.body.contry,
        city:req.body.city,
        Address:req.body.Address,
        state:req.body.state,
        pincode:req.body.pincode
    })
console.log(Address,"jjjjjjjjjjjjjjjjjjjjj");
   await Address.save().then(()=>{
    res.send(Address)
   })


})

/** delete Adress */

router.delete("/:id",(req,res)=>{
    Schema.findByIdAndDelete(req.params.id).then(()=>{
        console.log("deleted");
        res.send("deleted user data")
    })


})

/** list adress */

router.get("/", async(req,res)=>{
  const list = await  Schema.find()

        res.send(list)

console.log(list);
})


module.exports = router