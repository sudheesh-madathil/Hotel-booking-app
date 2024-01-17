import { Route, Routes, useLocation } from "react-router-dom";
import "./page/Searchitem.css"
import "./components/navbar.css";
import "./components/header.css";
import "./components/home.css";
import "./components/property.css";
import "./components/MailList.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./page/List.css"
import "./components/section.css";
import "./components/Footer.css";
import "./page/Hotel.css"
import "./page/guestdetail.css"
import { Home } from "./components/Home";

import { List } from "./page/List";
import { Hotel } from "./page/Hotel";
import { Guest } from "./page/guestdetail";

import { createContext ,useState} from "react";




export const UserDataContext =createContext(); 
function App() {
  const location = useLocation()
  const [Search]= useState(location.state?.List)
console.log(Search,"enter value");


  return (
    <>
<UserDataContext.Provider value={Search}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page" element={<List />} />
        <Route path="/Hotel" element={<Hotel />} />
        <Route path="/guest" element={<Guest />} />
      </Routes>
      </UserDataContext.Provider>
    </>
  );
}

export default App;
