import { useContext, useEffect } from "react";
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
import AOS from "aos";
import "aos/dist/aos.css";

const HomeLayout = () => {
  // AOS Animation here
  useEffect(() => {
    // AOS initialization
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,  // Makes sure animations happen on every scroll into view
      offset: 40,
      delay: 50,
    });

    // AOS refresh on scroll
    const handleScroll = () => {
      AOS.refresh(); 
    };

    // Refresh AOS on scrolling
    window.addEventListener("scroll", handleScroll); 

    // Refresh AOS on page load
    window.addEventListener("load", AOS.refresh);

    // Clean up event listeners
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("load", AOS.refresh);
    };
  }, []); // This runs only 

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
      <header className="shadow-xl bg-base-200 mb-20" data-aos="fade-down">
        <div
          className="xl:max-w-[80%] max-w-[95%] mx-auto"
          data-aos="fade-left"
        >
          <NavBar></NavBar>
        </div>
      </header>
      {/* Header div */}

      <div className="xl:max-w-[80%] max-w-[95%] mx-auto">
        <main>
          {/* Banner Div */}
          <div data-aos="fade-up">
            <Banner></Banner>
          </div>
          {/* Banner Div */}

          {/* Services Div */}
          <div data-aos="fade-down">
            <ServiceCardFetch></ServiceCardFetch>
          </div>
          {/* Services Div */}

          {/* Stats Div */}
          <div data-aos="fade-up">
            <Stats></Stats>
          </div>
          {/* Stats Div */}

          {/* Newsletter and FAQ Div */}
          <div data-aos="fade-left">
            <NewsFaq></NewsFaq>
          </div>
          {/* Newsletter and FAQ Div */}

          {/* About Us Div */}
          <div data-aos="fade-right">
            <AboutUs></AboutUs>
          </div>
          {/* About Us Div */}
        </main>
      </div>

      <footer className="mt-20" data-aos="fade-up">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
