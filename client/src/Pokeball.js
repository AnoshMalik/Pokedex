import pokeball from "./pokeball.png"
import "./Pokeball.css";

export default function Pokeball() {
    
    
    return (
      <div className="App">
        {/* <div style={{ width: 300, height: 300, border: "solid black 1px", textAlign:"center" }}> */}
          <img src={pokeball} alt="pokeball" className="animatePokeball"></img>
        {/* </div> */}
      </div>
    );
 }