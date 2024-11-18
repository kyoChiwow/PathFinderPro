import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";

const EmailRegister = () => {
    const { createUserEmail, setUser } = useContext(AuthContext);
    const handleRegistration = (e) => {
        e.preventDefault();

        // Getting the value of inputs
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.username.value;
        const photo = e.target.photourl.value;

        // Calling the Create User Function here
        createUserEmail(email, password)
        .then(result => {
            const user = result.user
            setUser(user);
        })
    }
  return (
    <div className="hero bg-base-200 rounded-lg py-24">
      <div className="hero-content flex-col w-full">
        <div className="text-center lg:text-left mb-8">
          <h1 className="text-5xl font-bold">Register here!</h1>
        </div>
        <div className="card bg-base-100 w-[50%] shrink-0 shadow-2xl">
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
                required
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
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
              <p className="text-base font-normal text-center mt-4">Already have an account? <Link to="auth/login" className="text-green-600 font-semibold">Login Here!</Link> </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailRegister;
