import { useState } from "react";
import HOC from "../HOC/HOC";

const ClickConunt = (props) =>{
    const {count , increseHandler, name} = props;
    console.log(name)
  
    return(
        <div className="text-center ">
            <button className="btn btn-success text-white" onClick={increseHandler}>count:{props.name} {count}</button>

        </div>
    )

}

export default HOC(ClickConunt , 5) ;