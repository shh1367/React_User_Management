import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { Fragment } from "react";
import Countbox from "./Countbox";
import CountButton from "./CountButton";
import Title from "./Title";


const Gallary = () => {

    const [title , setTitle] = useState("به گالری خوش آمدید")

    const [count_1,setcount_1] = useState(0)
    const [count_2,setcount_2] = useState(10)

    const handleIncrement_1 = useCallback(()=>{
        setcount_1(count_1 + 1)
    },[count_1])

    const handleIncrement_2 = useCallback(() => {
        setcount_2(count_2 + 1);
    },[count_2])




    return (
        <Fragment>
            <div className="container ">
                <h3 className="text-center text-warning bg-danger">صفحه گالری</h3>
                <Title  title={title}/>

                <Countbox count={count_1} title={"مجموعه ۱"}/>
                <CountButton title={"دکمه مجموعه ۱"} setcount={handleIncrement_1} />


                <Countbox count={count_2} title={"مجموعه ۲"}/>
                <CountButton title={"دکمه مجموعه ۲"}  setcount={handleIncrement_2} />


            </div>


        </Fragment>
    )

}

export default Gallary;










// useEffect(() => {


    //----------------- promise and async-await ----------------------  

       // const fun = () => {
       //     return new Promise((resolve, reject) => {

       //         console.log(1)
       //         setTimeout(() => {
       //             console.log(2)
       //             resolve(false)

       //         }, 1000)



       //     })

       // }


       // const fun_1 = async () => {
       //     const res = await fun()


       //     if (res) {
       //         console.log(3)
       //     } else {
       //         console.log(4)
       //     }


       // }

       // fun_1();

    //    const fun = (id) =>{
    //       return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
          
    //    }


    //    const test = async (id)=>{
    //        const res = await fun(id);
    //        console.log(res.data);
    //        console.log(id)


    //    }









       // const getData = async (id) => {
          
       //    return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
               
       // }





       // const test = async (id) => {
       //     await getData(id).then(res =>{
       //         console.log(res.data)
       //     })
          
       //     console.log(id)            
       // }
    
        //    for (const item of [1, 2, 3, 4, 5, 6]) {
        //        test(item)

        //    }

     

       







       // let myPromise =  new Promise((resolve, reject) => {

       //         console.log(1)
       //         setTimeout(() => {
       //             console.log(2)
       //             resolve(true)

       //         }, 1000)



       //     })

       //     myPromise.then(()=>{
       //         console.log(3)
       //     })





//----------------- promise and async-await ----------------------  






//    })








