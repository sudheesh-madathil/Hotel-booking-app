import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import {ToastContainer, } from 'react-toastify';
import { useState } from "react";
import { format } from "date-fns";
import {  useNavigate } from "react-router-dom";
import axios from "axios";
import { DateRange } from "react-date-range";
function Header({type}) {
  const [openOption, setOpenOption] = useState(false);
  const [Option, setOPtion] = useState({
    Adult: 1,
    Children: 0,
    Room: 1,
  });
  const navi = useNavigate()
  const [Search,setserch]= useState("")
  const [openDate, setopenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

const data = {
  destination:Search,
 
  checkindate:  date[0].startDate.toISOString(),
  checkoutdate: date[0].endDate.toISOString(),
Adult:Option.Adult,
Children:Option.Children,
Room:Option.Room
}
console.log(Search);
console.log("Sending data:", data);


  const handleOption = (name, opretion) => {
    setOPtion((prv) => {
      return {
        ...prv,
        [name]: opretion === "i" ? Option[name] + 1 : Option[name] - 1,
      };
    });
  };

  const handilClick=()=>{
    if(Search.trim() === "") {
     alert(" please fill the box")

      
    }
else{
  axios.post("http://localhost:3000/destination",data).then((responce)=>{
  console.log("data added",responce);
})   .catch((error) => {
  console.error("Error posting data:", error);
});
    navi("/page",{state:{Search, Option,date}})
  }
  }
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerListItem">
          <div className="headerList active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerList">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerList">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rental</span>
          </div>
          <div className="headerList">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>

          <div className="headerList">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        { type !== "list" &&
          <>
        <h1 className="headerTitile"> A lifetime of discount? Its Genius</h1>
        <p className="headerDesc">
          Get rewarded for your travels - unlock instant savings of 10% or more
          with a free lamabooking account
        </p>

        <button className="headerBtn">Sing in / Register</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input
            value={Search}
            onChange={(e)=>setserch(e.target.value)}
              type="text"
              placeholder="where are you going ?"
              className="headerSearchInput"
            />
          </div>

          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span
              onClick={() => setopenDate(!openDate)}
              className="headerSearchText"
            >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
              date[0].endDate,
              "MM/dd/yyyy"
            )}`}</span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
                minDate={new Date()}
              />
            )}
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span onClick={()=>setOpenOption(!openOption)} className="headerSearchText">{`${Option.Adult} Adult .${Option.Children} Children .${Option.Room} Room`}</span>
            {openOption&&(
            <div className="options">
              <div className="optionItems">
                <span className="optionText">Adult</span>
                <div className="optionCounterItem">
                  <button
                    disabled={Option.Adult <= 1}
                    className="optionCounter"
                    onClick={() => handleOption("Adult", "d")}
                  >
                    -
                  </button>
                  <span  className="optionCounterNumber">{Option.Adult}</span>
                  <button
                    className="optionCounter"
                    onClick={() => handleOption("Adult", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="optionItems">
                <span className="optionText">Children</span>
                <div className="optionCounterItem">
                  <button
                    disabled={Option.Children <= 0}
                    className="optionCounter"
                    onClick={() => handleOption("Children", "d")}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">{Option.Children}</span>
                  <button
                    className="optionCounter"
                    onClick={() => handleOption("Children", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="optionItems">
                <span className="optionText">Room</span>
                <div className="optionCounterItem">
                  <button
                    disabled={Option.Room <= 1}
                    className="optionCounter"
                    onClick={() => handleOption("Room", "d")}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">{Option.Room}</span>
                  <button
                    className="optionCounter"
                    onClick={() => handleOption("Room", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            )}
          </div>
          <div className="headerSearchItem">
            <button onClick={handilClick} className="headerBtn">Search</button>
          </div>
        </div>
        </> }
      </div>
      <ToastContainer />
    </div>
  );
}

export { Header };
