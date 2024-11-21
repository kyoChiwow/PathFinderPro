import { useContext } from "react";
import Banner from "../Components/Banner";
import NavBar from "../Components/NavBar";
import ServiceCardFetch from "../Components/ServiceCardFetch";
import { AuthContext } from "../Contexts/AuthProvider";
import Loading from "../Pages/Loading";
import Stats from "../Components/Stats";
import NewsFaq from "../Components/NewsFaq";
import AboutUs from "../Components/AboutUs";
import Footer from "../Components/Footer";
import { Helmet } from "react-helmet-async";

const HomeLayout = () => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <Helmet>
        <title>PathFinder Pro | Home</title>
      </Helmet>
      {/* Header div */}
      <header className="shadow-xl bg-base-200 mb-20">
        <div className="xl:max-w-[80%] max-w-[95%] mx-auto">
          <NavBar></NavBar>
        </div>
      </header>
      {/* Header div */}

      <div className="xl:max-w-[80%] max-w-[95%] mx-auto">
        <main>
          {/* Banner Div */}
          <div>
            <Banner></Banner>
          </div>
          {/* Banner Div */}

          {/* Services Div */}
          <div>
            <ServiceCardFetch></ServiceCardFetch>
          </div>
          {/* Services Div */}

          {/* Stats Div */}
          <div>
            <Stats></Stats>
          </div>
          {/* Stats Div */}

          {/* Newsletter and FAQ Div */}
          <div>
            <NewsFaq></NewsFaq>
          </div>
          {/* Newsletter and FAQ Div */}

          {/* About Us Div */}
          <div>
            <AboutUs></AboutUs>
          </div>
          {/* About Us Div */}
        </main>
      </div>

      <footer className="mt-20">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
