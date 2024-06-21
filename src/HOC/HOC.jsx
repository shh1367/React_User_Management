import { useState } from "react";

const HOC = (MainComponent , number) =>{
        const NewComponent = (props )=>{
            const [count , setCount] = useState(0);
            const increseHandler = () => {
                setCount(count + number);
            }

            return (
                <MainComponent {...props} count={count} increseHandler={increseHandler}/>
            )

        }

        return NewComponent;
}

export default HOC;