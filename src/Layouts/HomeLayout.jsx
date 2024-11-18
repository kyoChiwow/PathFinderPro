import Banner from "../Components/Banner";
import NavBar from "../Components/NavBar";
import ServiceCard from "../Components/ServiceCardFetch";

const HomeLayout = () => {
  return (
    <div className="xl:max-w-[80%] lg:max-w-[90%] max-w-[95%] mx-auto">
      {/* Header div */}
      <header>
        <NavBar></NavBar>
      </header>
      {/* Header div */}

      <main>
        {/* Banner Div */}
        <div>
          <Banner></Banner>
        </div>
        {/* Banner Div */}

        {/* Slider Div */}
        <div></div>
        {/* Slider Div */}

        {/* Services Div */}
        <div>
          <ServiceCard></ServiceCard>
        </div>
        {/* Services Div */}
      </main>
    </div>
  );
};

export default HomeLayout;
