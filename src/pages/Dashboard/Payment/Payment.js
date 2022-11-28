import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckOutPage from "./CheckOutPage";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const bookings = useLoaderData();
  return (
    <div>
      <h2 className="text-xl font-bold text-center">Confirm Payment</h2>
      <div className="w-96 my-8 mx-auto">
        <Elements stripe={stripePromise}>
          <CheckOutPage bookings={bookings}></CheckOutPage>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
