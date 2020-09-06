import React from "react";
import axios from "axios";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey =
        "pk_test_51HJW7SCyxeZ2k3uOWVlK931GBXqecPX8pbkYMszkvcA95jYWkh9hn3jrW2G5boak8vSkN08ow490ZoB2psvaxpGn00gdt6WIHj";

    const onToken = async (token) => {
        try {
            await axios({
                url: 'payment',
                method: 'post',
                data: {
                    amount: priceForStripe,
                    token
                }
            })
            alert('Payment successful');
        } catch (error) {
            console.error(error);
            alert('There was an issue with your payment. Please sure you use the provided credit card.');
        }
    };
    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your local is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;