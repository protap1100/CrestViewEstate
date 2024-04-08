import { Link } from "react-router-dom";
import logo from '../../src/assets/images/logo.png'

const TopBar = () => {
    return (
        <div className="bg-TopBackground py-4">
            <div className="flex px-10 justify-between items-center">
                <div>
                   <Link to='/home' > <img className='rounded-xl' src={logo} alt="" /></Link>
                </div>
                <div>
                    <button className="btn bg-btn border-btn-border">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default TopBar;