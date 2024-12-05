import { FiDollarSign } from "react-icons/fi";
import { Link } from "react-router";

const Products = ({ item }) => {
  const { id, img, title, price } = item;

  return (
    <div>
      <div className="card_container">
        <div className="card w-auto bg-base-100 shadow-xl pt-5 rounded-t-2xl h-[30rem]">
          <figure>
            <img className="px-4 w-96 h-80" src={img} alt="Shoes" />
          </figure>
          <div className="card-body p-5">
            <h2 className="card-title text-base">{title}</h2>
            <div className="card-actions justify-end">
              <p className="flex">
                <span className="flex items-center">
                  <FiDollarSign />
                </span>
                <span className="text-sm text-gray-500 ml-2">
                  Price: {price}
                </span>
              </p>
            </div>
            <Link to={`/payment/${id}`}><button className="btn w-36 mx-auto bg-[#3b82f6] text-white">Buy Now</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products