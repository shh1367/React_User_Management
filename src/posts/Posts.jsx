import axios from "axios";
import { useEffect, useState } from "react";
import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { JpAxios } from "../JpAxios/JpAxios";
import ClickConunt from "./ClickCount";
import HoverCount from "./HoverCount";

//  higher order component




const Posts = (props) => {
    // let endpoints = [
    //     'https://jsonplaceholder.typicode.com/users',
    //    ' https://jsonplaceholder.typicode.com/posts',
    //    ' https://jsonplaceholder.typicode.com/photos',

  
    //   ];
      
    //   axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
    //     (data) => console.log(data)
    //   ).catch(err =>{
    //     console.log(err)
    //   })

    // return (
    //     <Fragment>
    //         <div className="container ">
    //             <h3 className="text-center text-warning bg-danger">صفحه پست ها</h3>

    //         </div>


           
          


    //     </Fragment>
    // )

    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    const { confirm, Alert } = props;
    const [posts , setPosts]= useState({
      userId : "",
      id: "",
      title : "",
      body : ""
    })

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
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
            console.log(res.data);
           setPosts({
            userId : res.data.userId,
            id: res.data.id,
            title : res.data.title,
            body : res.data.body

           });
           console.log(posts)

         
            



        })
        // axios.then(res => {
        //     console.log(res.data);
        //     setMainUsers(res.data);
        //     setUsers(res.data)});


    }, [])

    const searchHandler = (e) => {

        // setUsers(mainUsers.filter(u => u.name.includes(e.target.value)));
        // console.log(mainUsers);



    }

    return (
        <Fragment>

            <h1 className="text-center  text-active p-4">مدیریت پست ها</h1>

            <div className="container form-group d-flex mt-5 rounded-3 row-sm-2">
                <input type="text" placeholder="جستجو" className="form-control col " onChange={searchHandler} />
                <Link to={'/users/modifyusers'} > <button className="btn btn-success ">اضافه کردن پست</button></Link>
            </div>
            <div className="container  p-4 rounded-3 mt-1">

                {users.length ? <table className="table table-hover table-striped rounded-3   table-active text-center mt-1 ">
                    <thead>
                        <tr className=" table-warning">
                           

                            <th>شناسه کاربری</th>
                            <th>عنوان پست </th>
                            <th>محتوا  </th>
                            <th>عملیات</th>

                        </tr>
                    </thead>
                    <tbody>
                        {posts.map(post => (
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                          
                                <td>
                                    <i className="fa fa-trash text-danger " onClick={() => deleteHandler(post.id, post.title)}></i>
                                    <i className="fa fa-edit text-warning me-4"
                                        onClick={

                                            // ... action 

                                            () => {
                                                navigate(`/users/modifyusers/${post.id}`, {
                                           
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
            {/* <UserDiailog /> */}
        </Fragment>
    )

}



export default Posts;