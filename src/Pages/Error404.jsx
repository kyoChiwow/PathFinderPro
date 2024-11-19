import { Link } from "react-router-dom";
import errorpic from "../assets/404error.jpg"
const Error404 = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-36">
            <div>
            <img className="rounded-xl" src={errorpic} alt="" />
            </div>
            <div className="mt-8">
            <Link to={"/"} className="btn btn-info">Go Back Home</Link>
            </div>
        </div>
    );
};

export default Error404;