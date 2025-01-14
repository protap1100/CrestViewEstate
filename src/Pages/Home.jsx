import { useContext } from "react";
import Banner from "../Components/Banner";
import Navbar from "../Components/Navbar";
import EstateData from "./EstateData";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Testimonial from "./Testimonial";
import { Helmet } from "react-helmet-async";
import Faq from "../Components/Faq";


const Home = () => {

    const {loading} = useContext(AuthContext);

    if(loading){
        return  <>
            <div className="flex justify-center items-center my-40">
              <span className="loading text-accent text-4xl text-center loading-spinner loading-lg"></span>
            </div>
        </>
      }
  

    return (
        <div>
            <Helmet>
                <title>Home</title>
                <link rel="icon" type="image/svg+xml" href='../../src/assets/icon/home.png' />
            </Helmet>
            <div className="container mt-5 mx-auto font-Poppins px-4 lg:px-0 ">
            <Navbar></Navbar>
            <Banner></Banner>
            <EstateData></EstateData>
            <Testimonial></Testimonial>
            <Faq></Faq>
        </div>
        </div>
    );
};

export default Home;