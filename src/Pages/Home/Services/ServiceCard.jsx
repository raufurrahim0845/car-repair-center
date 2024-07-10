import { Link } from "react-router-dom";

const ServiceCard = ({service}) => {
    const {_id, title, img, price } = service;
    return (
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p className="text-xl text-red-500">Price : ${price}</p>
          <div className="card-actions">
            <Link to={`/details/${_id}`}>
              <button className="btn btn-primary">Details</button>
            </Link>
            <Link to={`/book/${_id}`}>
              <button className="btn btn-primary">Buy Now</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;