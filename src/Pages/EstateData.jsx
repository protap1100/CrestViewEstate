import { useLoaderData } from "react-router-dom";
import SingleData from "./SingleData";
import { useState } from "react";

const EstateData = () => {
const [showData,setShowAll] = useState(6)

const EstateData = useLoaderData();
const data = EstateData.estates;
// console.log(data)
    return (
        <div className="my-5">
           <div className="my-10">
                <h1 className="text-3xl font-bold text-blue-950 my-5 text-center">All Estate Name</h1>
                    <p className="text-gray-700 text-center lg:px-60 px-4">
                        Exquisite estate featuring panoramic views, luxurious amenities, spacious interiors, and meticulously landscaped grounds, offering the epitome of sophisticated and elegant living for discerning individuals
                    </p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-5 justify-center">
                {
                    data.slice(0,showData).map((oneData) => <SingleData key={oneData.id} oneData={oneData}></SingleData>)
                }
           </div>
           <div className={`mt-5 text-center ${showData ===data.length && 'hidden'}`}>
           <button onClick={()=>setShowAll(data.length)} className="btn mt-5  text-white bg-btn border-btn-border">See All</button>
           </div>
        </div>
    );
};

export default EstateData;