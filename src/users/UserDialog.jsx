import { createPortal } from "react-dom";

const UserDiailog = () => {
    // return createPortal (  
    //     <div className="user_dialog_portal_container">
    //         <div className="user_dialog_portal_child ">dialog Box </div>
    //     </div> , document.getElementById('myPortal-root')
    //  )
    return  (  
        <div className="user_dialog_portal_container">
            <div className="user_dialog_portal_child ">dialog Box </div>
        </div> , document.getElementById('myPortal-root')
     )
      

    

}

export default UserDiailog;