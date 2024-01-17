import { useNavigate } from "react-router-dom";

function SearchItem() {
  const navi= useNavigate()
  const handilClick=()=>{
   
navi("/Hotel")


  }
  return (
    <>
      <div className="Searchitem">
        <img
          src="https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=2048x2048&w=is&k=20&c=yhDN3-AsSRzQWjgRmXIvuMRC1GcNpWdqNzKF7ij8W4k="
          alt=""
          className="SiImg"
        />
        <div  className="siDesc">
            <h1 className="siTitle">Tower street Apartment</h1>
            <span className="siDistance">500 from center</span>
            <span className="siTaxiOp">free airport taxi</span>
            <span className="siSubtitle"> Studio Apartment with Air conditioing</span>
            <span className="siFeatures"> Entire studio * 1 bathroom * 21m 1 full bed</span>
            <span className="siCancelOp"> free cancellation </span>
            <span className="siCancelOpsubtitle"> YOu can later so lock in this great price today </span>
        
        
        
        </div>
        <div className="siDetails">

        <div className="siRating">
        <span>Exallent</span>
        <button>8.9</button>
        </div>
        <div className="siDetailTexts">
            <span className="siprice">$8080</span>
            <span className="siTaxOp">Include taxes and fees</span>
            <button onClick={handilClick} className="siCheckButton">See availability</button>
        </div>
        </div>
      </div>
    </>
  );
}
export { SearchItem };
