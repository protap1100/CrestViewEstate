import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect } from 'react';

const Review = ({data}) => {
    // console.log(data)
    const {name,location,rating,review,image_url} = data;

    useEffect(()=>{
        Aos.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true 
        });
    },[])

    return (
        <div data-aos='fade-right' className="mt-5 shadow-xl flex flex-col justify-center items-center gap-3 border rounded-xl p-5 border-btn-border">
            <img className="w-40 h-40 rounded-xl" src={image_url} alt="Profile Image" />
            <h1 className="text-center">Name:{name}</h1>
            <h2 className="text-center">Location:{location}</h2>
            <h1 className="text-center">Rating:{rating}</h1>
            <h2 className="text-center">Description:</h2>
            <p  className="text-center">{review}</p>
        </div>
    );
};

export default Review;