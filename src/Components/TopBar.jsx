import { Link } from "react-router-dom";
import logo from '../../src/assets/images/logo.png'
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext } from "react";

const TopBar = () => {

    const {user} = useContext(AuthContext);

    return (
        <div className="bg-TopBackground py-4">
            <div className="flex px-10 justify-between items-center">
                <div>
                   <Link to='/' > <img className='rounded-xl' src={logo} alt="" /></Link>
                </div>
                <div>
                  {
                    user ? <Link to='' className="text-white btn bg-btn border-btn-border">Buy Now</Link> : <Link to='/login' className="btn bg-btn border-btn-border text-white">Login</Link>
                  }  
                </div>
            </div>
        </div>
    );
};

export default TopBar;