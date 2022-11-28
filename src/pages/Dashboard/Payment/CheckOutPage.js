import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import SmallSpinner from "../../shared/Spinner/SmallSpinner";

const CheckOutPage = ({ bookings }) => {
  const [clientSecret, setClientSecret] = useState("");
  const [success, setSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [processing, setProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const { categoryPrice, name, email, _id, category_id } = bookings;
  const [isLoading, setIsLoading] = useState(false);
  console.log(bookings);

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch(
      "https://laptop-resale-server-site.vercel.app/create-payment-intent",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ categoryPrice }),
      }
    )
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [categoryPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    if (!stripe && !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(error);
      setCardError(error.message);
      setIsLoading(false);
    } else {
      setCardError("");
    }
    setSuccess("");
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name,
            email,
          },
        },
      });
    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      const payment = {
        categoryPrice,
        email,
        transactionId: paymentIntent.id,
        bookingId: _id,
        productId: category_id,
      };

      fetch("https://laptop-resale-server-site.vercel.app/payments", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorizations: `bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            setIsLoading(false);
            setSuccess("congrets! your payment completed");
            setTransactionId(paymentIntent.id);
          }
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
        });
    }
    setProcessing(false);
    console.log(paymentIntent);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          className="btn btn-sm btn-primary mt-4"
          disabled={!stripe || !clientSecret || processing}
        >
          {isLoading ? <SmallSpinner></SmallSpinner> : "Pay"}
        </button>
      </form>
      <p className="text-xl text-red-500">{cardError}</p>

      {success && (
        <div>
          <p className="text-green-500">{success}</p>
          <p className="font-bold">your tarnsaction id {transactionId}</p>
        </div>
      )}
    </div>
  );
};

export default CheckOutPage;
