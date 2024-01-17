const express = require("express");
const router = express.Router();
const DestinationDetails = require("../model_schema/Destination_ddetails");

/** Post destination details */
router.post("/", async (req, res) => {
  console.log(req.body.destination,"destination");
  console.log(req.body.checkindate,"destination");
  const guestDestination = new DestinationDetails({
    destination: req.body.destination,
    checkindate: req.body.checkindate,
    checkoutdate:req.body.checkoutdate,
    Adult: req.body.Adult,
    Children: req.body.Children,
    Room: req.body.Room,
  });

  try {
    await guestDestination.save();
    console.log(guestDestination);
    res.send(guestDestination);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});
/**list destination */
router.get("/", async (req, res) => {
  try {
    const list = await DestinationDetails.find();
    console.log(list);
    res.send(list);
  } catch (error) {
    console.log(error);
    res.status(500).send("server error");
  }
});


/**delete destination */

router.delete("/:id",async(req,res)=>{

try{
    await DestinationDetails.findByIdAndDelete(req.params.id)
    console.log("deleted");
    res.send("deleted")
}

catch(error){
    console.log(error);
    res.status(500).send("server error")
}


})

module.exports = router;
