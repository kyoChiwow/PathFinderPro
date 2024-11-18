import { useParams } from "react-router-dom";
import NavBar from "../Components/NavBar";
import { useEffect, useState } from "react";
import Loading from "./Loading";

const ServiceDetails = () => {
  const { id } = useParams();
  const [services, setServices] = useState(null);
  console.log(services);

  useEffect(() => {
    const idInt = parseInt(id)
    fetch("/serviceData.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedService = data.find((service) => service.id === idInt);
        setServices(selectedService);
      });
  }, [id]);

  if(!services) {
    return <Loading></Loading> ;
  }

  const {
    image,
    service_name,
    category,
    description,
    pricing,
    duration,
    counselor,
    rating,
    location,
  } = services;

  return (
    <div className="xl:max-w-[80%] lg:max-w-[90%] max-w-[95%] mx-auto">
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        {/* Details Card Div */}
        <div>
          {/* Image div */}
          <div>
            <img src={image} alt="" />
          </div>
          {/* Image div */}
        </div>
        {/* Details Card Div */}

        {/* Feedback Div */}
        <div></div>
        {/* Feedback Div */}
      </main>
    </div>
  );
};

export default ServiceDetails;
