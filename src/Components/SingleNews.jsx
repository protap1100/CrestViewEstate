import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect } from 'react';



const SingleNews = ({ newsData }) => {
    const { type, title, date, categories, content, image, author, location } = newsData;


    useEffect(()=>{
        Aos.init({
            duration: 700,
            easing: 'ease-in-out',
            once: true 
        });
    },[])

    return (
        <div className=" bg-green-200 rounded-lg shadow-lg p-6" data-aos='fade-left'>
            <div className="mb-4" data-aos='fade-right'>
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="text-gray-500">Published on {date}</p>
                <p className="text-gray-600">Type: {type}</p>
                <p className="text-gray-600">Category: {categories}</p>
            </div>
            <div className="mb-4" data-aos='fade-top'>
                <img src={image} alt={title} className="w-full h-64 object-cover rounded" />
            </div>
            <div className="mb-4" data-aos='fade-bottom'>
                <p className="text-gray-700">{content}</p>
            </div>
            <div className="flex justify-between items-center">
                <p className="text-sm text-gray-600">By {author}</p>
                {location && <p className="text-sm text-gray-600">Location: {location}</p>}
            </div>
        </div>
    );
};

export default SingleNews;
