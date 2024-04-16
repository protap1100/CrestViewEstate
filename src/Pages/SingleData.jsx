import { Link } from "react-router-dom";
import Aos from 'aos';
import { useEffect } from "react";
import 'aos/dist/aos.css';

const SingleData = ({oneData}) => {

    const {id,estate_title,segment_name,image,price,status} = oneData;
    // console.log(oneData);
    useEffect(()=>{
        Aos.init({
            duration: 700,
            easing: 'ease-in-out',
            once: true 
        });
    },[])
    // console.log(Aos)
    return (
        <div data-aos='fade-left' >
            <div  className="border border-gray-500 shadow-xl p-5 flex flex-col justify-center items-center rounded-xl">
                <div className="max-w-xs rounded-md shadow-md ">
                    <img src={image} alt="" className="object-cover object-center w-[400px] rounded-t-md h-72 " />
                    <div data-aos='fade-right' className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                            <h2 className="text-xl font-semibold tracking-wide text-center">{estate_title}</h2>
                            <p className="dark:text-gray-800 text-center">{segment_name}</p>
                            <div className="flex justify-between">
                                <p className="font-bold text-lg p-1 text-red-600">{isNaN(price) ? price : 'Contact'}</p>
                                <p className="font-bold bg-green-600 rounded-xl cursor-pointer text-white p-2">{status.charAt(0).toUpperCase() + status.slice(1)}</p>
                            </div>
                    </div>
                        <Link to={`/estateDetails/${id}`} className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-btn text-white hover:bg-border">View Property</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleData;