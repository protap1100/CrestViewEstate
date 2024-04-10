import { useContext, useState } from "react";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link,useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";

const Register = () => {

  const {createUser,googleSignIn,GithubSignIn} = useContext(AuthContext);
  const [showPassword, setShowPassword]  = useState(false);
  const [wrongPassword, setWrongPassword] = useState('');
  const [regSuccess, setRegSuccess] = useState('');
  const [error, setError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleLogin = () =>{
    // console.log('hello world');
    googleSignIn()
    .then(res=>{
      console.log(res,'doing')
      navigate(location?.state ? location.state : '/')
    })
    .catch((error) =>{
      console.log(error,'login in failed')
    })
  }
  const handleGithubLogin = () =>{
    console.log('Hello world');
    GithubSignIn()
    .then(res=>{
      console.log(res,'Hi')
      navigate(location?.state ? location.state : '/')
    })
    .catch(error=>{
      console.log(error,'github Login Done')
    })
  }

  const handleRegister = (e) =>{
      e.preventDefault();
      const name = e.target.name.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
      const photoURL = e.target.photo.value;
      // console.log(name,email,password,photoURL)

      if (!/(?=.*[a-z])/.test(password)) {
        setRegSuccess('')
        setWrongPassword("Password must contain at least one lowercase letter");
        return;
      }else if(!/(?=.*[A-Z])/.test(password)){
        setRegSuccess('')
        setWrongPassword("Password must contain at least one uppercase letter");
      }else if(password.length < 6){
        setRegSuccess('')
        setWrongPassword('Password must be 6 character or higher')
      }else{
        createUser(email,password,name,photoURL)
        .then(res=>{
          console.log(res)
          setWrongPassword('')
          setRegSuccess('You Have Registered Successfully')
          navigate(location?.state ? location.state : '/login')
        })
        .catch(error=>{
          setWrongPassword('')
          setRegSuccess('')
          console.log('hocche na', error);
          setError(error.message);
          console.log(error.message)
        })
      }
  }


  return (
    <div className="container mt-10 mx-auto">
            <Helmet>
                <title>Register</title>
            </Helmet>
      <div>
        <h1 className="text-3xl font-bold text-center my-10">Register Here</h1>
      </div>
      <div className=" bg-base-200">
          <div className="py-10 flex items-center justify-center rounded-xl flex-col">
             <div className=" shrink-0 w-2/3 lg:w-2/4 py-10 border rounded-xl px-2 lg:px-20 bg-base-100">
            <form onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo Url.."
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            name="password"
                            className="input input-bordered w-full" 
                            required
                        />
                        <span className="absolute inset-y-0 right-0 pr-3 flex items-center" onClick={() =>{
                                setShowPassword(!showPassword)
                            }} >
                            {
                                showPassword ? <FaEye className="text-gray-800 text-2xl cursor-pointer"/> : 
                                <FaEyeSlash className="text-gray-800 text-2xl cursor-pointer" /> 
                            }
                        </span>
                        </div>
                        <div>
                          <h1 className=" text-red-700">{wrongPassword}</h1>
                          <h1 className="text-green-600"> {regSuccess}</h1>
                          <h1 className="text-red-600"> {error}</h1>
                        </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary bg-btn border-btn-border">Sign Up</button>
              </div>
            </form>
            <div> 
              <h1 className="mt-5 text-center">
                Do Not Have An Account?{" "}
                <Link className="font-bold text-green-700"  to="/login">
                  Login
                </Link>
              </h1>
            </div>
            <div>
              <div onClick={handleGoogleLogin} className="p-5 text-center bg-blue-300 rounded-xl mt-5 flex items-center justify-center gap-10 hover:bg-blue-500  cursor-pointer">
                <h1>Login With Google</h1>
                <h1 className="text-xl">
                  <BsGoogle></BsGoogle>
                </h1>
              </div>
              <div onClick={handleGithubLogin} className="p-5 text-center bg-blue-300 rounded-xl mt-5 flex items-center justify-center gap-10 hover:bg-blue-500  cursor-pointer">
                <h1>Login With Github</h1>
                <h1 className="text-xl">
                  <BsGithub></BsGithub>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
