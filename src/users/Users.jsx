import { Fragment } from "react"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
// import swal from "sweetalert";
import Swal from "sweetalert2";
import ShowAlertHoc from "../HOC/ShowAlertHoc";
import { JpAxios } from "../JpAxios/JpAxios";
import UserDiailog from "./UserDialog";

const Users = (props) => {
    const [users, setUsers] = useState([]);
    const [mainUsers, setMainUsers] = useState([]);
    const navigate = useNavigate();
    const { confirm, Alert } = props;

    //    const option = {
    //     url : 'https://jsonplaceholder.typicode.com/users' ,
    //     method : 'get'


    //    } 


    const deleteHandler = async  (userId, username) => {
        if (confirm("are u sure?" , username) ) {
            axios.delete(`http://localhost/atarod-api-backend/deleteUser.php/?id=${userId}`).then(res =>
                console.log(res.data));
            const newList = users.filter(u => u.id != userId);
            setUsers(newList);
            Alert();


        }
    }
    // await confirm("این عملیات غیر قابل بازگشت می باشد", username)

    // const deleteHandler =  (userId,userName) => {
    //     axios.delete(`http://localhost/atarod-api-backend/deleteUser.php/?id=${userId}`).then(res =>
    //         console.log(res.status));
    //     const newList = users.filter(u => u.id != userId);
    //     setUsers(newList);

    // }

    // sycronous
    // Asycronous
    useEffect(() => {
        // JpAxios.get('/users').then(res => {
        //     console.log(res.data);
        //     setUsers(res.data)

        // })
        JpAxios.get('/getAllUsers.php').then(res => {
            console.log(res.data);
            setUsers(res.data);
            setMainUsers(res.data)



        })
        // axios.then(res => {
        //     console.log(res.data);
        //     setMainUsers(res.data);
        //     setUsers(res.data)});


    }, [])

    const searchHandler = (e) => {

        setUsers(mainUsers.filter(u => u.name.includes(e.target.value)));
        console.log(mainUsers);



    }

    return (
        <Fragment>

            <h1 className="text-center  text-active p-4">مدیریت کاربران</h1>

            <div className="container form-group d-flex mt-5 rounded-3 row-sm-2">
                <input type="text" placeholder="جستجو" className="form-control col " onChange={searchHandler} />
                <Link to={'/users/modifyusers'} > <button className="btn btn-success ">اضافه کردن کاربر</button></Link>
            </div>
            <div className="container  p-4 rounded-3 mt-1">

                {users.length ? <table className="table table-hover table-striped rounded-3   table-active text-center mt-1 ">
                    <thead>
                        <tr className=" table-warning">
                            <th>#</th>
                            <th>نام</th>
                            <th>نام کاربری</th>
                            <th>ایمیل</th>
                            <th>شهر</th>
                            <th>خیابان</th>
                            <th>منطقه</th>
                            <th>کدپستی</th>
                            <th>عملیات</th>

                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.fullName}</td>
                                <td>{user.userName}</td>
                                <td>{user.email}</td>
                                <td>{user.city}</td>
                                <td>{user.street}</td>
                                <td>{user.state}</td>
                                <td>{user.postalCode}</td>
                                <td>
                                    <i className="fa fa-trash text-danger " onClick={() => deleteHandler(user.id, user.fullName)}></i>
                                    <i className="fa fa-edit text-warning me-4"
                                        onClick={

                                            // ... action 

                                            () => {
                                                navigate(`/users/modifyusers/${user.id}`, {
                                                    state: {

                                                        name: 'react',
                                                        family: 'reacts'
                                                    }
                                                })
                                            }}></i>
                                </td>
                            </tr>


                        ))}

                    </tbody>
                </table> : <h1 className="text-center bg-danger p-4">کاربری یافت نشد</h1>}
                {/* navLink
useLocation
useNavigate */}

            </div>
            <UserDiailog />
        </Fragment>
    )

}

export default Users;