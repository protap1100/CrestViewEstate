import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Home = () => {
    return (
        <div>
            <div className="container mt-5 mx-auto font-Poppins">
            <Navbar></Navbar>
            <h1>Im Home page</h1>
            <Banner></Banner>
        </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;