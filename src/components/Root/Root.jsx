import { Outlet } from "react-router-dom";
import Header from "../Header/header";

const Root = () => {
    return (
        <div>
            <Header></Header>
           <Outlet></Outlet> 
           <h2>This is root</h2>
        </div>
    );
};

export default Root;