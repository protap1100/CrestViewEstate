import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";

const EstateDetails = () => {
    const singleEstate = useLoaderData();
    const {id} = useParams();
    // console.log(parseInt(id))
    // console.log(singleEstate.estates)
    const findData = singleEstate.estates;
    const estate = findData.find(estate2 => estate2.id === parseInt(id));
    console.log(estate)
    const {estate_title,segment_name,description,price,status,area,location,facilities,image,} = estate;

    return (
        <div className="font-Roboto container mt-5 mx-auto">
              <Helmet>
                <link rel="icon" type="image/svg+xml" href="/src/assets/icon/card.png" />
                <title>Estate Details</title>
              </Helmet>
            <div>
                    
            </div>
            <div className="container mt-5 mx-auto font-Poppins px-4 lg:px-0  my-5">
                <h1 className="text-center font-bold text-3xl">All Details Of {estate_title}</h1>
                <div className="my-10 flex justify-around items-stretch gap-5 px-5 lg:flex-row flex-col  border border-gray-500">
                    <img className="rounded-xl h-[800px] w-[600px]  mt-5" src={image} alt="" />
                    <div className="my-5 flex flex-col justify-center items-center">
                        <h1 className="mt-5 text-3xl text-center font-bold" >{estate_title}</h1>
                        <h1 className="mt-5 text-center text-2xl">{segment_name}</h1>
                        <h1 className="mt-5 text-center font-bold">Description:</h1>
                        <p className="mt-5 px-5 text-gray-600 text-center lg:px-20">{description}</p>
                        <p className="mt-5 font-bold text-2xl">Price: {price}</p>
                        <p className="mt-5 font-bold"><span className="font-semibold">Total Area: {area}</span></p>
                        <p className="mt-5">Location: {location}</p>
                        <h1 className="mt-3 text-xl font-bold">Facilities</h1>
                        <button className="btn mt-5 text-white py-1 mt5 bg-btn border-btn-border" >{status.charAt(0).toUpperCase() + status.slice(1)}</button>
                        <div className="mt-5 flex gap-5 ">
                            {
                                facilities.map((fac,index) => <h1 className="font-bold text-green-500" key={index} >{fac}</h1>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EstateDetails;