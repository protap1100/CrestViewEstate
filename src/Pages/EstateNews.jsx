import { useEffect, useState } from "react";
import SingleNews from "../Components/SingleNews";
import Navbar from "../Components/Navbar";
import { Helmet } from "react-helmet";
import 'aos/dist/aos.css';
import Aos from 'aos';

const EstateNews = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('estateNews.json')
            .then(res => res.json())
            .then(data => setNews(data))
            .catch(error => console.error('Error fetching news:', error));
    }, []);

    useEffect(()=>{
        Aos.init({
            duration: 700,
            easing: 'ease-in-out',
            once: true 
        });
    },[])


    return (
        <div className="mt-5 container mx-auto">
            <Helmet>
                <link rel="icon" type="image/svg+xml" href="/src/assets/icon/contact.png" />
                <title>News And Blog</title>
            </Helmet>
            <Navbar></Navbar>
            <section className="text-gray-800" >
                <div className="py-5 rounded-2xl text-center" data-aos='fade-left' >
                    <h1 className="text-3xl font-bold">Latest News</h1>
                    <p>Read the latest news and blogs written by famous authors.</p>
                </div>
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12" data-aos='fade-right' >
                    {news.length > 0 && (
                        <a href="#" className="block max-w-sm mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 rounded-xl bg-red-200">
                            <img src={news[0].image} alt={news[0].title} className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7" />
                            <div className="p-6 space-y-2 lg:col-span-5">
                                <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{news[0].title}</h3>
                                <span className="text-xs text-gray-50">{news[0].date}</span>
                                <p>{news[0].content}</p>
                                <span className="text-gray-50">Type: {news[0].categories}</span>
                                <h1 className="text-gray-50">Author: {news[0].author}</h1>
                                <h1 className="text-gray-50">Location: {news[0].location}</h1>
                            </div>
                        </a>
                    )}
                    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" data-aos='fade-left'>
                        {news.slice(1,news.length).map(newsItem => (
                            <SingleNews key={newsItem.id} newsData={newsItem} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EstateNews;
