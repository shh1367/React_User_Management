import { useState } from "react";
import HOC from "../HOC/HOC";

const HoverCount = (props) =>{
    const {count , increseHandler ,name} = props;
    console.log(name)
   
    return(
        <div className="text-center">
            <button className="btn btn-success text-white" onMouseEnter={increseHandler}>count : {count}</button>

        </div>
    )

}

export default HOC(HoverCount , 3) ;