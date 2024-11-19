import { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import ExclusiveCard from "../Components/exclusiveCard";

const ExclusiveOffer = () => {
  const [excluOffers, setExcluOffers] = useState([]);
  useEffect(() => {
    fetch("exclusiveData.json")
      .then((res) => res.json())
      .then((data) => setExcluOffers(data));
  }, []);
  return (
    <div className="xl:max-w-[80%] max-w-[95%] mx-auto">
      <header>
        <NavBar></NavBar>
      </header>

      <main>
        {/* Cards Div */}
        <div className="mt-12">
          {/* Cards Info Div */}
          <div>
            <h1 className="font-bold text-4xl text-center">Exclusive Offers Just For You!</h1>
            <p className="text-lg font-medium text-center mt-4">These offer are validate for the next 2 months! So, hurry up and book your favorite today!</p>
          </div>
          {/* Cards Info Div */}

          {/* Cards here */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {
                excluOffers.map(offer => <ExclusiveCard key={offer.id} offer={offer}></ExclusiveCard>)
            }
          </div>
          {/* Cards here */}
        </div>
        {/* Cards Div */}
      </main>
    </div>
  );
};

export default ExclusiveOffer;
