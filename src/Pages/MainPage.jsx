import TopBar from "../Components/TopBar";
import { Outlet } from 'react-router-dom'

const MainPage = () => {
    return (
        <div>
            <TopBar></TopBar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainPage;