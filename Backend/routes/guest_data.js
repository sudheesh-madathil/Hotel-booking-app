var express = require("express");
var router = express.Router();
const Schema = require("../model_schema/guest_details");
const bodyparser = require("body-parser");
/* post  guest details  */

router.post("/",async (req, res) => {
  console.log(req.body.firstname,"naaaameee");
  const guest_data = new Schema({
    firstname : req.body.firstname,
   lastname : req.body.lastname,
    phonenumber : req.body.phonenumber,
  });
  console.log(guest_data);



 await guest_data.save().then(() => {
    res.send(guest_data);
   
  })
  .catch((error)=>{
    console.log(error);
    res.status(500).send("Error saving data")
  })
});



/* get guest all data */

router.get("/",async(req,res)=>{

const list = await Schema.find()

console.log(list.length,"data length");
res.send(list)

})


/* delet guest details */
router.delete("/:id",(req,res)=>{
Schema.findByIdAndDelete(req.params.id).then(()=>{
  console.log("deleted");
  res.send("deleted")

})

})
module.exports = router;



