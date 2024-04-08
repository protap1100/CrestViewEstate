import { useContext } from "react";
import Banner from "../Components/Banner";
import Navbar from "../Components/Navbar";
import EstateData from "./EstateData";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Testimonial from "./Testimonial";


const Home = () => {

    const {loading} = useContext(AuthContext);

    if(loading){
        return  <>
            <div className="flex justify-center items-center my-10">
              <span className="loading text-center loading-spinner loading-lg"></span>
            </div>
        </>
      }
  

    return (
        <div>
            <div className="container mt-5 mx-auto font-Poppins px-4 lg:px-0 ">
            <Navbar></Navbar>
            <h1>Im Home page</h1>
            <Banner></Banner>
            <EstateData></EstateData>
            <Testimonial></Testimonial>
        </div>
        </div>
    );
};

export default Home;