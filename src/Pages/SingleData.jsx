import { Link } from "react-router-dom";

const SingleData = ({oneData}) => {

    const {id,estate_title,segment_name,image} = oneData;

    return (
        <div>
            <div className="border border-gray-500 shadow-xl p-5 flex flex-col justify-center items-center rounded-xl">
                <div className="max-w-xs rounded-md shadow-md ">
                    <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 " />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-xl font-semibold tracking-wide text-center">{estate_title}</h2>
                            <p className="dark:text-gray-800 text-center">{segment_name}</p>
                        </div>
                        <Link to={`/estateDetails/${id}`} className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-btn text-white hover:bg-border">View Property</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleData;