import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_51PraxnKUYEuYs9yO6dyJePaLPQxNI8EwnCtySSUy7ys61dtUltvgDIb4ithciISHFM1hv6rWvbfFPq3qnr71EzO400cNMIWXiS";

  const onToken = (token) => {
    console.log(token);
    alert('Payment successful');
  };

  return (
    
    <StripeCheckout
      label='Pay Now💦'
      name='Ashimolowo Ecommerce💦'
      billingAddress
      shippingAddress
    //   image='U+1F4A6' 
      description={`Total required payment is ${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now!'
      token={onToken}
      stripeKey={publishableKey}
    />
    
  );
};

export default StripeCheckoutButton;
