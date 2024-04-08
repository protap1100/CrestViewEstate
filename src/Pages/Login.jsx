import { useContext, useState } from "react";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const [showPassword, setShowPassword] = useState(true);

  const {signIn} = useContext(AuthContext);

  const handleLogin = (e) =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password  = e.target.password.value;
    console.log(email,password)

    signIn(email,password)
    .then(res=>{
      console.log(res.user)
    })
    .catch(error=>{
      console.log(error,'Kaj Hocche na ')
    })
  }




  return (
    <div className="container mt-10 mx-auto">
      <div>
        <h1 className="text-3xl font-bold text-center my-10">Login Here</h1>
      </div>
      <div className="bg-base-200">
        <div className="py-10 flex items-center justify-center rounded-xl flex-col">
          <div className=" shrink-0 w-2/3 lg:w-2/4 py-10 border rounded-xl px-2 lg:px-20 bg-base-100">
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name='email'
                  placeholder="Email"
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
                    name='password'
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="input input-bordered w-full"
                    required
                  />
                  <span
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  >
                    {showPassword ? (
                      <FaEyeSlash className="text-gray-500 text-2xl cursor-pointer">
                        {" "}
                      </FaEyeSlash>
                    ) : (
                      <FaEye className="text-gray-500 text-2xl cursor-pointer" />
                    )}
                  </span>
                </div>

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary bg-btn border-btn-border">
                  Login
                </button>
              </div>
            </form>
            <div>
              <h1 className="mt-5 text-center">
                Do Not Have Account?{" "}
                <Link className="font-bold text-green-700" to="/register">
                  Register
                </Link>
              </h1>
            </div>
            <div>
              <div className="p-5 text-center bg-blue-300 rounded-xl mt-5 flex items-center justify-center gap-10 hover:bg-blue-500 cursor-pointer">
                <h1>Login With Google</h1>{" "}
                <h1 className="text-xl">
                  <BsGoogle></BsGoogle>
                </h1>{" "}
              </div>
              <div className="p-5 text-center bg-blue-300 rounded-xl mt-5 flex items-center justify-center gap-10 hover:bg-blue-500 cursor-pointer">
                <h1>Login With Github</h1>{" "}
                <h1 className="text-xl">
                  <BsGithub></BsGithub>
                </h1>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
