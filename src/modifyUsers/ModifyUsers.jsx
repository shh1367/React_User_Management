import { useState } from "react";
import { Fragment } from "react";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { JpAxios } from "../JpAxios/JpAxios";

const ModifyUser = () => {
    const { userId } = useParams();
    const navigate = useNavigate();
    const useLocParam = useLocation();
    console.log(useLocParam);
    // console.log(myparameter);

   
    const [data, setData] = useState({
        fullName: "",
        userName: "",
        email: "",
        city: "",
        street: "",
        state: "",
        postalCode: ""

    });



    useEffect(() => {
        JpAxios.get(`getUser.php/?id=${userId}`).then(res => {

            setData({
                fullName: res.data.fullName,
                userName: res.data.userName,
                email: res.data.email,
                city: res.data.city,
                street: res.data.street,
                state: res.data.state,
                postalCode: res.data.postalCode

            });
        }).catch(err => {
            console.log('this is error from get data in useEffect', err)
        })


    }, [])



    // useEffect(()=>{


    // },[])

    const submitform = (e) => {
        e.preventDefault()

        if (userId) {
            JpAxios.put(`/users/${userId}`, data).then(res => {
                console.log(res)
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })

                Toast.fire({
                    icon: 'success',
                    title: 'کاربر مورد نظر با موفقیت ویرایش گردید'
                })
                navigate('/users')
            }).catch(err => {
                console.log('this is error from put method in submitForm', err)
            })

        } else {
            JpAxios.post(`addUser.php/?id=${userId}`, data).then(res => {
                console.log(res);
                if (res.status == 201) {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                            Toast.fire({
                                icon: 'success',
                                title: 'کاربر مورد نظر با موفقیت ثبت  گردید'
                            })
                        }
                    })
                }



              
                // }



            }).catch(err => {
                console.log('this is error from post method in submitForm', err)
            })
        }




        // try{

        // }catch{

        // }

        setData({
            fullName: "",
            userName: "",
            email: "",
            city: "",
            street: "",
            state: "",
            postalCode: ""

        })
        // setTimeout(() => {
        //     navigate(-1)
            
        // }, 1000);


    }

    return (<form onSubmit={submitform}>
        <Outlet />
        <h2 className="text-black text-center m-5 ">{userId ? "ویرایش کاربر" : "افزودن کاربر"}</h2>
        <div className=" text-warning container p-5  bg-success d-flex flex-column rounded-4" >
            <div className="  d-flex flex-column mb-4 ">
                <label className="form-label" htmlFor="">نام و نام خانوادگی</label>
                <input className="form-control" type="text" value={data.fullName} onChange={(e) => {
                    setData({ ...data, fullName: e.target.value })
                    console.log(data)
                }} />
            </div>
            <div className=" d-flex flex-column mb-4 ">
                <label className="form-label" htmlFor="">نام کاربری</label>
                <input className="form-control" type="text" value={data.userName} onChange={(e) => {
                    setData({ ...data, userName: e.target.value })

                }} />
            </div>
            <div className="d-flex flex-column mb-4 ">
                <label className="form-label" htmlFor="">ایمیل</label>
                <input className="form-control" type="text" value={data.email} onChange={(e) => {
                    setData({ ...data, email: e.target.value })

                }} />
            </div>
            <label className="form-label" htmlFor="">آدرس</label>
            <div className=" d-flex flex-wrap flex-column mb-5   ">
                <div className="row d-flex flex-wrap mb-2">
                    <div className="col">
                        <input className="form-control " placeholder="شهر" type="text" name="" id="" value={data.city}
                            onChange={(e) => {
                                setData({ ...data, city: e.target.value })
                            }} />
                    </div>
                    <div className="col">
                        <input className="form-control " placeholder="خیابان" type="text" name="" id="" value={data.street}
                            onChange={(e) => {
                                setData({ ...data, street: e.target.value })
                            }} />
                    </div>

                </div>
                <div className="row ">
                    <div className="col">
                        <input className="form-control " placeholder="ادامه آدرس" type="text" name="" id="" value={data.state}
                            onChange={(e) => {
                                setData({ ...data, state: e.target.value })
                            }} />
                    </div>
                    <div className="col">
                        <input className="form-control " placeholder="کدپستی" type="text" name="" id="" value={data.postalCode}
                            onChange={(e) => {
                                setData({ ...data, postalCode: e.target.value })
                            }} />
                    </div>
                </div>

            </div>

            <div className="container d">
                <button className="btn btn-primary " type="submit"> {userId ? " ویرایش کاربر" : "افزودن کاربر"}</button>
                <Link to={'/users'}> <button className="btn btn-danger me-2">بازگشت </button></Link>
            </div>

        </div>




    </form>)

}
export default ModifyUser;