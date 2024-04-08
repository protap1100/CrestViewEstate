import { BsGithub, BsGoogle } from "react-icons/bs";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="container mt-10 mx-auto">
      <div>
        <h1 className="text-3xl font-bold text-center my-10">Register Here</h1>
      </div>
      <div className=" bg-base-200">
          <div className="py-10 flex items-center justify-center rounded-xl flex-col">
             <div className=" shrink-0 w-2/3 lg:w-2/4 py-10 border rounded-xl px-2 lg:px-20 bg-base-100">
            <form>
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
                  type="email"
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
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
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
              <div className="p-5 text-center bg-blue-300 rounded-xl mt-5 flex items-center justify-center gap-10 hover:bg-blue-500  cursor-pointer">
                <h1>Login With Google</h1>
                <h1 className="text-xl">
                  <BsGoogle></BsGoogle>
                </h1>
              </div>
              <div className="p-5 text-center bg-blue-300 rounded-xl mt-5 flex items-center justify-center gap-10 hover:bg-blue-500  cursor-pointer">
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
