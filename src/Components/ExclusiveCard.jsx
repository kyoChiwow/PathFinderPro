import PropTypes from "prop-types";

const ExclusiveCard = ({ offer }) => {
  const {
    image,
    offer_name,
    category,
    description,
    pricing,
    duration,
    coach,
    rating,
    location,
  } = offer;
  return (
    <div className="mt-10">
      {/* Card Wrapping Div */}
      <div className="p-4 bg-base-200 rounded-2xl shadow-xl">
        {/* Image Div */}
        <div>
          <img className="rounded-2xl lg:h-[407px] w-full" src={image} alt="" />
        </div>
        {/* Image Div */}

        {/* Card Info Div */}
        <div>
          <h1 className="font-bold text-2xl my-4 text-center"><span className="font-semibold">{offer_name}</span></h1>
          <p className="font-normal text-lg mt-4">Category: <span className="font-semibold">{category}</span></p>
          <p className="font-normal text-lg mt-4">Duration: <span className="font-semibold">{duration}</span></p>
          <p className="font-normal text-lg mt-4">Coach: <span className="font-semibold">{coach}</span></p>
          <p className="font-normal text-lg mt-4">Location: <span className="font-semibold">{location}</span></p>
          <p className="font-normal text-lg mt-4">Description: <span className="font-semibold">{description}</span></p>
          <div className="text-lg font-normal flex items-center gap-2">
            Rating:{" "}
            <div className="bg-white rounded-full p-4">
              <p className="font-semibold">{rating}</p>{" "}
            </div>
          </div>
          <p className="font-normal text-lg mt-4">Price: <span className="font-semibold">{pricing}$</span></p>
        </div>
        {/* Card Info Div */}
      </div>
      {/* Card Wrapping Div */}
    </div>
  );
};

ExclusiveCard.propTypes = {
  offer: PropTypes.object.isRequired,
};
export default ExclusiveCard;
