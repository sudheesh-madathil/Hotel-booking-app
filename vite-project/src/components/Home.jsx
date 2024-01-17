import { Navbar } from "./navbar"
import { Header } from "./header"
import { Section } from "./section"
import { PropertyList } from "./property"
import { Mail } from "./MailList"
import { Footer } from "./footer"
function Home(){
    return(
        <>
       

 <Navbar/>
 <Header/>
 <div className="homeContainer">
 <Section/> 


 
 
 <h1 className="homeTitile"> Browse by property type</h1> 
 <PropertyList/>
 </div>



 <Mail/>
 <Footer/>
        </>
    )
}export{Home}