import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)

const Payment = () => {
  const { id } = useParams();

  const { data: details = {} } = useQuery({
    queryKey: ["details", id],
    queryFn: async () => {
      const res = await axios.get(`/products.json`);
      const allProducts = res.data;
      return allProducts.find((product) => product.id === id);
    },
  });
  const { title, img, price } = details || {};

  return (
    <div className="md:h-[80vh] h-screen flex justify-center items-center ">
      <div className="md:w-[30rem] w-96 h-96 p-5 rounded bg-gray-200 flex flex-col justify-between shadow-gray-700 shadow-lg">
        <div className="flex justify-between">
          <div>
            <h3 className="font-bold text-lg">Model: {title}</h3>
            <p className="py-4">Price: ${price}</p>
          </div>
          <div>
            <img className="w-44 h-36" src={img} alt="Shoes" />
          </div>
        </div>
        <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm details={details}></CheckoutForm>
        </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
