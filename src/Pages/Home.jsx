import Banner from "../Components/Banner";
import Navbar from "../Components/Navbar";
import EstateData from "./EstateData";

const Home = () => {
    return (
        <div>
            <div className="container mt-5 mx-auto font-Poppins px-4 lg:px-0 ">
            <Navbar></Navbar>
            <h1>Im Home page</h1>
            <Banner></Banner>
            <EstateData></EstateData>
        </div>
        </div>
    );
};

export default Home;