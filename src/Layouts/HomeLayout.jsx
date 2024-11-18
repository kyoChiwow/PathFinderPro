import Banner from "../Components/Banner";
import NavBar from "../Components/NavBar";

const HomeLayout = () => {
  return (
    <div className="xl:max-w-[80%] lg:max-w-[90%] max-w-[95%] mx-auto">
      {/* Header div */}
        <header>
            <NavBar></NavBar>
        </header>
      {/* Header div */}
      {/* Banner Div */}
      <div>
        <Banner></Banner>
      </div>
      {/* Banner Div */}
    </div>
  );
};

export default HomeLayout;
