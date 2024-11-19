import { useParams } from "react-router-dom";
import NavBar from "../Components/NavBar";
import { useEffect, useState } from "react";
import Loading from "./Loading";

const ServiceDetails = () => {
  const { id } = useParams();
  const [services, setServices] = useState(null);
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");

  const handleAddComment = () => {
        setComments([...comments, commentInput.trim()]);
        setCommentInput("");
  }

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
            <img className="lg:w-[70%] rounded-2xl shadow-xl" src={image} alt="" />
          </div>
          {/* Image div */}

          {/* Info Div */}
          <div className="bg-white rounded-2xl py-2 px-4 lg:px-8 lg:py-4 mt-8 mx-auto shadow-lg flex flex-col gap-4">
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
      </main>

      {/* Feedback section */}
      <section className="mt-8 bg-base-200 px-8 py-4 rounded-2xl">
        {/* Feedback Div */}
        <div className="flex flex-col-reverse lg:flex-row gap-28">
          {/* Input Field Div */}
          <div className="flex flex-col gap-8 lg:w-[50%]">
            <textarea
              placeholder="Write your comment here"
              className="textarea textarea-bordered textarea-success textarea-lg w-full h-[250px]"
              name="comment"
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
            ></textarea>
            <button onClick={handleAddComment} className="btn btn-success">Submit</button>
          </div>
          {/* Input Field Div */}

          {/* Added Comment Div */}
          <div className="bg-white px-8 py-4 rounded-2xl lg:w-[50%]">
            <h1 className="text-xl font-bold mb-4">Comments here</h1>
            <div className="">
                <ul>
                    {
                        comments.map((comment, idx) => <li className="list-disc text-lg font-semibold ml-8" key={idx}>{comment}</li> )
                    }
                </ul>
            </div>
          </div>
          {/* Added Comment Div */}
        </div>
        {/* Feedback Div */}
      </section>
      {/* Feedback section */}
    </div>
  );
};

export default ServiceDetails;
