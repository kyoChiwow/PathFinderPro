import { Link } from "react-router-dom";
import errorpic from "../assets/404error.jpg";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { Helmet } from "react-helmet-async";
const Error404 = () => {
  return (
    <div>
        <Helmet>
            <title>PathFinder Pro | Error 404</title>
        </Helmet>
        <header className="xl:max-w-[80%] max-w-[95%] mx-auto">
            <NavBar></NavBar>
        </header>
      <div className="flex flex-col items-center justify-center mt-36">
        <div>
          <img className="rounded-xl" src={errorpic} alt="" />
        </div>
        <div className="mt-8">
          <Link to={"/"} className="btn btn-info">
            Blue Pill
          </Link>
        </div>
      </div>
      <footer className="mt-20">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Error404;
