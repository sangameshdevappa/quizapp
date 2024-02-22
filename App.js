import { useState } from "react";
import {Html, Sql, Java } from "./Subject"
import './styles.css'



function App() {
  
    const [pg,setPg] = useState(1)
    function changePage(pgNum){
      setPg(pgNum)
    }
    return (
      <div>
        <button onClick={() => changePage(1)} className={pg ===1?"activeButton":" "}>Java</button>
        <button onClick={() => changePage(2)} className={pg ===2?"activeButton":" "}>Sql</button>
        <button onClick={() => changePage(3)} className={pg ===3?"activeButton":" "}>Html</button>

      

        {pg === 1 && <Java />}
        {pg === 2 && <Sql />}
        {pg === 3 && <Html />}
      </div>
      );
}

export default App;