import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import Loading from "../Pages/Loading";

const AuthLayout = () => {
    const { loading } = useContext(AuthContext);
    if(loading) {
        return <Loading></Loading>
    }
    return (
        <div className="xl:max-w-[80%] lg:max-w-[90%] max-w-[95%] mx-auto">
            <header>
                <NavBar></NavBar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;