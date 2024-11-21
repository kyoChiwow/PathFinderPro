import { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import ExclusiveCard from "../Components/exclusiveCard";
import Footer from "../Components/Footer";
import { Helmet } from "react-helmet-async";

const ExclusiveOffer = () => {
  const [excluOffers, setExcluOffers] = useState([]);
  useEffect(() => {
    fetch("exclusiveData.json")
      .then((res) => res.json())
      .then((data) => setExcluOffers(data));
  }, []);
  return (
    <div>
      <Helmet>
        <title>PathFinder Pro | Exclusive Offers</title>
      </Helmet>
      <header className="shadow-xl bg-base-200 mb-20">
        <div className="xl:max-w-[80%] max-w-[95%] mx-auto">
          <NavBar></NavBar>
        </div>
      </header>
      <main className="xl:max-w-[80%] max-w-[95%] mx-auto">
        {/* Cards Div */}
        <div className="mt-12">
          {/* Cards Info Div */}
          <div>
            <h1 className="font-bold text-4xl text-center">
              Exclusive Offers Just For You!
            </h1>
            <p className="text-lg font-medium text-center mt-4">
              These offer are validate for the next 2 months! So, hurry up and
              book your favorite today!
            </p>
          </div>
          {/* Cards Info Div */}

          {/* Cards here */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {excluOffers.map((offer) => (
              <ExclusiveCard key={offer.id} offer={offer}></ExclusiveCard>
            ))}
          </div>
          {/* Cards here */}

          {/* Submit Ticket Div */}
          <div className="flex flex-col lg:flex-row justify-between bg-base-200 rounded-2xl p-4 mt-20 gap-8 lg:gap-0">
            {/* Ticket info Div */}
            <div className="flex flex-col justify-center lg:w-[47%]">
              <h1 className="font-bold text-2xl mb-4">Submit a ticket</h1>
              <p className="font-medium text-lg">
                If you have an opinion on our services or you have a complain
                that you would like us to address please submit a ticket and we
                will get back to you as soon as possible
              </p>
            </div>
            {/* Ticket info Div */}

            {/* Ticket Input field and Button (Non Functional) */}
            <div className="lg:w-[47%]">
              <div className="flex flex-col gap-8">
                <textarea
                  placeholder="Write your comment/complain here"
                  className="textarea textarea-bordered textarea-success textarea-lg w-full h-[250px]"
                  name="comment"
                ></textarea>
                <button className="btn btn-success">Submit</button>
              </div>
            </div>
            {/* Ticket Input field and Button (Non Functional) */}
          </div>
          {/* Submit Ticket Div */}
        </div>
        {/* Cards Div */}
      </main>
      <footer className="mt-20">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default ExclusiveOffer;
