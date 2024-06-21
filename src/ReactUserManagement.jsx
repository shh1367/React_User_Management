import "bootstrap/dist/css/bootstrap.css";
import { Fragment } from 'react';
import SideNav from './SideNav';
import MainContent from './MainContent';
import './myStyle.css';
// import myStyle from './myStyle.module.css';
import { BrowserRouter } from "react-router-dom";
import { MyContext } from "./MyContext";
import { useState } from "react";
import UserDiailog from "./users/UserDialog";

function ReactUserManagement() {
  const [showMenu , setShowmenu] = useState(true);

  const menuHandler = () => {
    setShowmenu(!showMenu);}

  return (
    <BrowserRouter>
      <div className="container main-container mt-5 rounded-3">
        <i className={`fa fa-bars p-3 d-md-none `} onClick={menuHandler}></i>
        <MyContext.Provider value={{showMenu , setShowmenu}}>
        <SideNav />
        <MainContent />
        </MyContext.Provider>
        {/* <UserDiailog/> */}
      </div>
    </BrowserRouter>

  );




}
export default ReactUserManagement;
