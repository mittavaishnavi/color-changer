import {useState} from "react";
import "./Demo.css";
function Demo() {
    const [color,setColor]=useState("white");
    return ( 
        <div className="box"
            style={{background: color}}>
                <h1>color changer</h1>
                <button onClick={()=>setColor("pink")}>pink</button>
                <button onClick={()=>setColor("blue")}>blue</button>
                <button onClick={()=>setColor("green")}>green</button>
                <button onClick={()=>setColor("red")}>red</button>
                <button onClick={()=>setColor("yellow")}>yellow</button>
                <button onClick={()=>setColor("purple")}>purple</button>
        </div>
     );
}

export default Demo;