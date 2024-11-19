import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Cards = ({ service }) => {
  const { id, image, service_name, category, pricing, counselor } = service;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          className="xl:h-[316px] lg:h-[188px] w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{service_name}</h2>
        <p className="font-normal text-base">Category: {category}</p>
        <p className="font-normal text-base">Price: {pricing}$</p>
        <p className="font-normal text-base">Counselor: {counselor}</p>
        <div className="card-actions justify-end">
          <Link to={`/service/${id}`} className="btn btn-success">Learn More!</Link>
        </div>
      </div>
    </div>
  );
};

Cards.propTypes = {
  service: PropTypes.object.isRequired,
};
export default Cards;
