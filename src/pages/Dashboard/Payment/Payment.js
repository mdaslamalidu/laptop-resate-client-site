import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckOutPage from "./CheckOutPage";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);

const Payment = () => {
  const bookings = useLoaderData();
  console.log(bookings);
  return (
    <div>
      <h2>Payment</h2>
      <div className="w-96 my-8">
        <Elements stripe={stripePromise}>
          <CheckOutPage bookings={bookings}></CheckOutPage>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
