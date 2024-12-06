import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from 'react-toastify';
import './style.css';

const CheckoutForm = ({details}) => {
  const { title, img, price } = details || {};
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log("Payment error", error);
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
      if(paymentMethod){
        const payment = {
          img:img,
          price:price,
          title:title,
          date: new Date()
        };
        const res = await axios.post("http://localhost:5000/order", payment);
        console.log("payment saved", res.data);
        if(res.data?.id || res.data?.insertedId){
          toast.success('Payment successful!', {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          
          setTimeout(() => {
            navigate("/");
          }, 100);
        }
      }else{
        console.log("Payment error", error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <div className="text-center">
      <button className="btn w-28 bg-green-700 hover:bg-green-500 text-white" disabled={!stripe}>
          Pay
      </button></div>
      <p className="text-red-600">{error}</p>
    </form>
  );
};

export default CheckoutForm;