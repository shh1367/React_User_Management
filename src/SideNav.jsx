import { useContext } from "react";
import { Fragment } from "react"
import { Link, NavLink } from "react-router-dom";
import { MyContext } from "./MyContext";
// import myimg from "../public/assets/profileimg.jpg"

const SideNav = () => {
    const {showMenu} = useContext(MyContext);
   

    return (

        <Fragment>

            <nav class="top-down-nav text-light pb-3 shadow-lg table table-hover " style={showMenu ? {top:0} : {}}>
                <img className="rounded-circle img-thumnail img-fluid border border-light border-4 w-75" src={require("./assets/images/profileimg.jpg")} />
                <NavLink style={({isActive})=>{return isActive ? {background:'white', color:'black' , width : '100%' , borderRadius : '50px'} : {} }} to="/users"><h5 class="text-center">کاربران</h5></NavLink>
                <NavLink style={({isActive})=>{return isActive ? {background:'white', color:'black', width : '100%' , borderRadius : '50px'} : {} }} to="/posts"><h5 class="text-center">پست ها</h5></NavLink>
                <NavLink style={({isActive})=>{return isActive ? {background:'white', color:'black', width : '100%' , borderRadius : '50px'} : {} }} to="/gallaries"><h5 class="text-center">گالری</h5></NavLink>
                <NavLink style={({isActive})=>{return isActive ? {background:'white', color:'black',width : '100%' , borderRadius : '50px'} : {} }} to="/tasks"><h5 class="text-center">کارها</h5></NavLink>
                
            </nav>


        </Fragment>
    )

}

export default SideNav;

