import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";

const EmailRegister = () => {
  const { createUserEmail, setUser, updateCreatedUser, loginUserGmail } =
    useContext(AuthContext);
  const navigate = useNavigate();

  // Calling the create user with gmail function here
  const handleGoogleLogin = () => {
    loginUserGmail()
    .then(result => {
      const user = result.user
      setUser(user)
      Swal.fire({
        title: "Success!",
        text: "You have successfully logged in through Google!",
        icon: "success",
        willClose: () => {
            navigate("/")
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

  const handleRegistration = (e) => {
    e.preventDefault();

    // Getting the value of inputs
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photourl.value;
    const name = e.target.username.value;

    // Checking the password before executing
    const regex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!regex.test(password)) {
      Swal.fire({
        title: "Error!",
        text: "Password should contain one Uppercase, Lowercase and atleast 6 characters",
        icon: "error",
      });
      return;
    }

    // Calling the Create User Function here
    createUserEmail(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateCreatedUser({
          displayName: name,
          photoURL: photo,
        });
        Swal.fire({
          title: "Success!",
          text: "You have successfully created your account!",
          icon: "success",
          willClose: () => {
            navigate("/");
          }
        });
        
      })
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: err.message,
          icon: "error",
        });
      });
  };
  return (
    <div className="hero bg-base-200 rounded-lg py-24">
      <div className="hero-content flex-col w-full">
        <div className="text-center lg:text-left mb-8">
          <h1 className="text-5xl font-bold">Register here!</h1>
        </div>
        <div className="card bg-base-100 md:w-[80%] lg:w-[60%] xl:w-[50%] shrink-0 shadow-2xl">
          <form onSubmit={handleRegistration} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Type your name"
                className="input input-bordered"
                required
                name="username"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Type your photo URL"
                className="input input-bordered"
                name="photourl"
              />
            </div>
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
              <button className="btn btn-primary">Register</button>
              <button onClick={handleGoogleLogin} className="btn btn-outline mt-4">
                <FcGoogle></FcGoogle>
                Login With Google
              </button>
              <p className="text-base font-normal text-center mt-4">
                Already have an account?{" "}
                <Link to="/auth/login" className="text-green-600 font-semibold">
                  Login Here!
                </Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailRegister;
