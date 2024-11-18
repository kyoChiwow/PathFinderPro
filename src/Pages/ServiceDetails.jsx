import { useParams } from "react-router-dom";
import NavBar from "../Components/NavBar";
import { useEffect, useState } from "react";
import Loading from "./Loading";

const ServiceDetails = () => {
  const { id } = useParams();
  const [services, setServices] = useState(null);
  console.log(services);

  useEffect(() => {
    const idInt = parseInt(id);
    fetch("/serviceData.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedService = data.find((service) => service.id === idInt);
        setServices(selectedService);
      });
  }, [id]);

  if (!services) {
    return <Loading></Loading>;
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

  console.log(typeof rating);

  return (
    <div className="xl:max-w-[80%] lg:max-w-[90%] max-w-[95%] mx-auto">
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        {/* Details Card Div */}
        <div className="bg-base-200 py-4 px-8 rounded-2xl">
          {/* Image div */}
          <div className="flex justify-center">
            <img className="w-[70%] rounded-2xl shadow-xl" src={image} alt="" />
          </div>
          {/* Image div */}

          {/* Info Div */}
          <div className="bg-white rounded-2xl px-8 py-4 mt-8 w-[80%] mx-auto shadow-lg flex flex-col gap-4">
            <h1 className="font-bold text-2xl">{service_name}</h1>
            <p className="text-lg font-normal">
              Category: <span className="font-semibold">{category}</span>{" "}
            </p>
            <p className="text-lg font-normal">
              Duration: <span className="font-semibold">{duration}</span>{" "}
            </p>
            <p className="text-lg font-normal">
              Counselor: <span className="font-semibold">{counselor}</span>{" "}
            </p>
            <p className="text-lg font-normal">
              Description: <span className="font-semibold">{description}</span>{" "}
            </p>
            <div className="text-lg font-normal flex items-center gap-2">
              Rating:{" "}
              <div className="bg-base-200 rounded-full p-4">
                <p className="font-semibold">{rating}</p>{" "}
              </div>
            </div>
            <p className="text-lg font-normal">
              Pricing: <span className="font-semibold">{pricing}$</span>{" "}
            </p>
            <p className="text-lg font-normal">
              Location: <span className="font-semibold">{location}</span>{" "}
            </p>
          </div>
          {/* Info Div */}
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
