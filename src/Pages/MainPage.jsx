import Footer from "../Components/Footer";
import TopBar from "../Components/TopBar";
import { Outlet } from 'react-router-dom'

const MainPage = () => {
    return (
        <div>
            <TopBar></TopBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainPage;