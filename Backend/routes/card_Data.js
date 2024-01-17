const express=require("express")
const router = express.Router()
const Schema = require("../model_schema/card_details")

router.post("/",async(req,res)=>{
    const cardData= new Schema({
        nameOnCard:req.body.nameOnCard,
        cardNumber:req.body.cardNumber,
        yourEmail:req.body. yourEmail,
        ExpirationDate:req.body.ExpirationDate,
        Securitycode:req.body.  Securitycode

    })
    console.log(cardData);
    await cardData.save().then(()=>{
        res.send(cardData)
    })
})



/**get card details */

router.get("/",async(req,res)=>{
  const list = await  Schema.find()
  res.send(list)
})


/**delete card */
router. delete("/:id",async(req,res)=>{
  await  Schema.findByIdAndDelete(req.params.id).then(()=>{
        res.send("deleted")
    })
})
module.exports = router
