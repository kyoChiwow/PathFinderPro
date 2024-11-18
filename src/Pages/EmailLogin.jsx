import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import Swal from 'sweetalert2';
import { FcGoogle } from "react-icons/fc";

const EmailLogin = () => {
    const { loginUserEmail, setUser, loginUserGmail } = useContext(AuthContext);
    const navigate = useNavigate()
    const handleGoogleLogin = () => {
        loginUserGmail()
        .then(result => {
            const user = result.user;
            setUser(user);
            Swal.fire({
                title: "Success!",
                text: "You have successfully logged into your account!",
                icon: "success",
                willClose: () => {
                    navigate("/");
                }
              });
        })
        .catch(err => {
            Swal.fire({
                title: "Error!",
                text: err.message,
                icon: "error",
              });
        })
    }

    const handleLogin = (e) => {
        e.preventDefault();

        // Getting the infos
        const email = e.target.email.value;
        const password = e.target.password.value;

        // Calling the function here
        loginUserEmail(email, password)
        .then(result => {
            const user = result.user;
            setUser(user);
            Swal.fire({
                title: "Success!",
                text: "You have successfully logged into your account!",
                icon: "success",
                willClose: () => {
                    navigate("/");
                }
              });
        })
        .catch(err => {
            Swal.fire({
                title: "Error!",
                text: err.message,
                icon: "error",
              });
        })
    }
    return (
        <div className="hero bg-base-200 rounded-lg py-24">
      <div className="hero-content flex-col w-full">
        <div className="text-center lg:text-left mb-8">
          <h1 className="text-5xl font-bold">Login here!</h1>
        </div>
        <div className="card bg-base-100 w-[50%] shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Email Address</span>
              </label>
              <input
                type="email"
                placeholder="Type your email address"
                className="input input-bordered"
                required
                name="email"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Password</span>
              </label>
              <input
                type="password"
                placeholder="Type your password"
                className="input input-bordered"
                required
                name="password"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
              <button onClick={handleGoogleLogin} className="btn btn-outline mt-4">
                <FcGoogle></FcGoogle>
                Login With Google
              </button>
              <p className="text-base font-normal text-center mt-4">Do not have an account? <Link to="/auth/register" className="text-green-600 font-semibold">Register Here!</Link> </p>
            </div>
          </form>
        </div>
      </div>
    </div>
    );
};

export default EmailLogin;