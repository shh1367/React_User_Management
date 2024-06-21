import { Fragment, useContext, useState } from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import EditDesc from "./EditDesc";
import Gallary from "./gallary/Gallary";
import WithAlert2 from "./HOC/WithAlert2";
import ModifyUsers from "./modifyUsers/ModifyUsers";
import { MyContext } from "./MyContext";
import Posts from "./posts/Posts";
import Tasks from "./tasks/Tasks";
import Users from "./users/Users"

const MainContent = () => {
    const [isUser, setIsUser] = useState(false);
    const { showMenu, setShowmenu } = useContext(MyContext);
    return (

        <Routes>
            {/* <Route path="/users" element={ <Navigate to={'/posts'} />} /> */}
            {/* <Route path="/users/" element={<Users/>} /> */}
            <Route path="/users/" element={<WithAlert2 render={(Alert, confirm) => ( <Users Alert={Alert} confirm={confirm} /> )} />} />


            <Route path="/users/modifyusers/" element={<ModifyUsers />}>
                <Route path=":userId" element={<EditDesc />} />
                {/* <Route path="edit"  element /> */}

            </Route>

            <Route path="/posts" element={<Posts />} />
            <Route path="/gallaries" element={<Gallary />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="*" element={<Users />} />
        </Routes>


    )
}

export default MainContent;


