import React from "react";
import StripeCheckout from "react-stripe-checkout";

import publishableKey from "./stripe-publish-key";

import CustomBtn from "../CustomBtn/CustomBtn";

import "./StripeButton.css";

let StripeButton = ({ price }) => {
  let priceForStripe = price * 100;

  let onToken = (token) => {
    console.log(token);
    alert("Payment Successful!");
  };
  return (
    <div className="StripeButton">
      <StripeCheckout
        stripeKey={publishableKey}
        image="https://stripe.com/img/documentation/checkout/marketplace.png"
        name="E-commerce"
        description={`Your total is $${price}`}
        panelLabel="Pay"
        amount={priceForStripe}
        currency="USD"
        shippingAddress
        billingAddress
        token={onToken}
      >
        <CustomBtn>Pay With Card</CustomBtn>
      </StripeCheckout>
    </div>
  );
};

export default StripeButton;
