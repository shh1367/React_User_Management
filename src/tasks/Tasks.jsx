import { useState } from "react";
import { useReducer } from "react";
import { useEffect } from "react";
import { Fragment } from "react";


const Tasks = () => {
    let init = {

        value1 : 5 ,
        value2 : 2

    };

    const reducer = (counter, action) => {

        // if (action === "increment") return counter + 1
        // if (action === "decrement") return counter - 1
        // if (action === "reset") return init

        switch (action.type) {
            case "increment_1":
                return {...counter , value1 : counter.value1 + 1 }
            case "decrement_1":
                return {...counter , value1 : counter.value1 - 1 }
                case "increment_2":
                return {...counter , value2 : counter.value2 + 1 }
            case "decrement_2":
                return {...counter , value2 : counter.value2 - 1 }

            case "reset":
                return init

        }

    }


    const [counter, dispatch] = useReducer(reducer, init)
    const [count, setCount] = useState(0)
  

    const counterHandler = () => {
        // for (let index = 0; index < 5; index++) {
        //     setCount((prevState)=>{

        //         // .....action 

        //        return prevState + 1

        //     });

        // dispatch(1);

        console.log(count);



    }



    useEffect(() => {
        console.log("the first Useeffect is running ")

    }, []);
    useEffect(() => {
        console.log("every render ")
        return () => {
            // console.log("destroyed function");
        }
    });
    useEffect(() => {
        console.log("just render with changing an state")
    }, [count]);

    return (
        <Fragment>
            <div className="container h-200 text-center ">
                <h3 className="text-center text-warning bg-danger">صفحه کارها</h3>
                <h1 className="text-primary">{counter.value1}</h1>
                <h1 className="text-primary">{counter.value2}</h1>
                <button className="btn btn-primary text-center" onClick={() => dispatch({type : "increment_1"})}> افزاینده مقدار اول</button>
                <button className="btn btn-danger text-center" onClick={() => dispatch({type : "decrement_1"})}>کاهنده مقدار اول</button>
                <button className="btn btn-primary text-center" onClick={() => dispatch({type : "increment_2"})}>افزاینده مقدار دوم</button>
                <button className="btn btn-danger text-center" onClick={() => dispatch({type : "decrement_2"})}>کاهنده مقدار دوم</button>
                <button className="btn btn-success text-center" onClick={() => dispatch({type : "reset"})}>ریست</button>

            </div>


        </Fragment>
    )

}



export default Tasks;