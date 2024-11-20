import { useLocation } from "react-router-dom";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import { useContext, useState } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import Swal from "sweetalert2";

const ForgotPassword = () => {
  const location = useLocation();
  const { passwordReset } = useContext(AuthContext);
  const [forgotEmail, setForgotEmail] = useState(location?.state || "")
  
  const handlePasswordReset = (e) => {
    e.preventDefault();
    passwordReset(forgotEmail)
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "Password reset mail has been sent!",
          icon: "success",
        })
        .then(() => {
            window.open("https://mail.google.com", "_blank");
        })
      })
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: err.message,
          icon: "error",
        });
      })
      .finally(() => {
        setForgotEmail("");
      })
  };
  return (
    <div>
      <div className="xl:max-w-[80%] max-w-[95%] mx-auto min-h-screen">
        <header>
          <NavBar></NavBar>
        </header>

        <main className="lg:max-w-[60%] xl:max-w-[50%] md:max-w-[70%] mx-auto mt-20 lg:mt-32">
          <div className="text-center mb-10">
            <h1 className="font-bold text-3xl">
              Enter your email below to reset your password
            </h1>
          </div>
          <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
            <form onSubmit={handlePasswordReset} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Email Address</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered"
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  name="passwordEmail"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Send Reset Password</button>
              </div>
            </form>
          </div>
        </main>
      </div>
      <footer className="mt-20">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default ForgotPassword;
