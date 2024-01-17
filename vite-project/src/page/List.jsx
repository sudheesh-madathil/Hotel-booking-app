
import { useLocation } from "react-router-dom"
import { Header } from "../components/header"
import { Navbar } from "../components/navbar"
import { useState } from "react"
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import { SearchItem } from "./Serchitem";
function List(){
    const location =useLocation()
    const [Search]= useState(location.state.Search)

    const [openDate]= useState(location.state. Option)
    const [date ,setDate]= useState(location.state.date)
    const [calender,setcalander]=useState(false)

    return(
        <>
  <Navbar/>
  <Header type="list"/>
  <div className="listContainer">
    <div className="listWrapper">
        <div className="listSearch">
        
            <h1 className="lsTitle"></h1> 
            <div className="lsItem">
                <label htmlFor="">Destination</label>
                <input placeholder={Search} type="text" />
            </div>
            <div className="lsItem">
                <label htmlFor="">Cheak in Date</label>
              <span onClick={()=>setcalander(!calender)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
              date[0].endDate,
              "MM/dd/yyyy"
            )}`}</span>
            {calender && (
                
            <DateRange
             className="custom-date-range" 
            onChange={item=>setDate([item.selection])} minDate={new Date()}
            ranges={date}/>
    
              )}
            </div>
           <div className="lsItem">
            
            <div className="lsOptionItem">
                <span className="lsOptionText">min price <small>per night</small></span>
                <input type="number" className="lsOptionInput" />
            </div>
            <div className="lsOptionItem">
                <span className="lsOptionText">max price <small>per night</small></span>
                <input type="number" className="lsOptionInput" />
            </div>
            <div className="lsOptionItem">
                <span className="lsOptionText">Adult </span>
                <input min={1} placeholder={openDate.Adult} type="number" className="lsOptionInput" />
            </div>
            <div className="lsOptionItem">
                <span className="lsOptionText">Children</span>
                <input min={0} placeholder={openDate.Children} type="number" className="lsOptionInput" />
            </div>  <div className="lsOptionItem">
                <span className="lsOptionText">Room</span>
                <input min={1} type="number" placeholder={openDate.Room}  className="lsOptionInput" />
            </div>
            <button>Search</button>
           </div>
   
          
            </div>
      

        
            <div className="listResult">
    <SearchItem/>
    <SearchItem/>
    <SearchItem/>
    <SearchItem/>
    <SearchItem/>
    <SearchItem/>

  
</div>
    </div>

  </div>


        
        </>
    )
}export{List}