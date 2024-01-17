import {  useEffect, useState } from "react";
import { Mail } from "../components/MailList";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import axios from "axios";
// import { UserDataContext } from "../App";
import  Axios from "axios"
function Guest() {

const [fristname,setfristname] = useState("")
const [lastname,setlastname] = useState("")
const [phonenumber,setphonenumber]=useState("")
const [guest ,setguest] = useState([])

const guestData ={
  firstname:fristname,
  lastname:lastname,
  phonenumber:phonenumber
};






const handilClick =()=>{

  
setfristname("")
setlastname("")

setphonenumber("")

   Axios.post("http://localhost:3000/users",guestData).then((response)=>{
    console.log("post data,,,,,,,,,,,,,,,,,",response.guestData);
   })
   .catch((error) => {
    console.error("Error posting data:", error);
  });



  

}
useEffect(()=>{
  axios.get("http://localhost:3000/destination").then((responce)=>{

  setguest(responce.data)


  })
},[])



  return (
    <>
      <Header type="list" />
      <div className="maincontainer">
        <div className="tittilecontainer">
          <div className="tittleitem">
            <ul>
              <li>Guest Details</li>
              <li>Room Details</li>
            </ul>
          </div>
        </div>
        <div className="detailcontainer">
          <div className="guest">
            <div className="gustitem">
              <span>fist name</span>
              <input type="text" value={fristname} onChange={(e)=>setfristname(e.target.value)} />
       
            </div>
            <div className="gustitem">
              <span>last name</span>
              <input type="text" value={lastname} onChange={(e)=>setlastname(e.target.value)}  />
            </div>
            <div className="gustitem">
              <span>phone number</span>
              <input type="text" value={phonenumber} onChange={(e)=>setphonenumber(e.target.value)}  />
            </div>
          </div>
          <div className="card">
            <h5 className="titilecard">card details</h5>
          </div>



         


          <div className="room">
            <div className="roomitem">
              <span className="roomlist">Room</span>
              <input type="text" />
            </div>
            <div className="roomitem">
              <span className="roomlist">price per day</span>
              <input type="text" />
            </div>
            <div className="roomitem">
              <span className="roomlist">check in </span>
       

              
              <input  type="text" />
    
              
            </div>




     
            <div className="roomitem">
              <span className="roomlist">check out</span>
              <input value= {guest.checkoutData} type="text" />
            </div>



   
            <h5 className="titilecharge">charge</h5>
            <div className="roomitem">
              <span className="roomlist">2 Nights</span>
              <input type="text" />
            </div>
            <div className="roomitem">
              <span className="roomlist">VAT</span>
              <input type="text" />
            </div>
            <div className="roomitem">
              <span className="roomlist">Fees</span>
              <input type="text" />
            </div>
            <div className="roomitem">
              <span className="roomlist">Total</span>
              <input type="text" />
            </div>
          </div>
        </div>

        <div className="cardcontainer">
          <div className="carddetails">
            <div className="carditem">
              <span>name on card</span>
              <input type="text" />
            </div>
            <div className="carditem">
              <span>card number</span>
              <input type="text" />
            </div>
            <div className="carditem">
              <span>your email</span>
              <input type="text" />
            </div>
            <div className="carditem">
              <span>Expiration date</span>
              <input type="text" />
            </div>
            <div className="carditem">
              <span>Security Code</span>
              <input type="text" />
            </div>
          </div>
        </div>
      </div>
      <div className="paymentcontainer">
        <div className="container">
          <div className="billing">
            <div className="billingitem">
              <span>contry</span>
              <input type="text" name="" id="" />
            </div>
            <div className="billingitem">
              <span>city</span>
              <input type="text" name="" id="" />
            </div>
            <div className="billingitem">
              <span>Address</span>
              <input type="text" name="" id="" />
            </div>
            <div className="billingitem">
              <span>state</span>
              <input type="text" name="" id="" />
            </div>
            <div className="billingitem">
              <span>pin code</span>
              <input type="text" name="" id="" />
            </div>
          </div>
          <div className="payment">
            <div className="paymentitem">
              <h4> accept and cornfrom</h4>
              <p>
                {" "}
                <input type="radio" />i agree the booking condition{" "}
              </p>
              <p>Grant total $854</p>
              <button onClick={handilClick}>submit</button>
            </div>
          </div>
        </div>
        <Mail />
        <Footer />
      </div>
    </>
  );
}
export { Guest };
