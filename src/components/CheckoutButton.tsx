import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  import.meta.env.VITE_STRIPE_LIVE_PUBLIC_KEY ||
    process.env.REACT_STRIPE_PUBLIC_KEY ||
    'pk_test_51QMsOaK9yUy0vysUKbnXwqTPQNnneX80rFejx2w01CdzJHx4qEmJ9KQd5opywl3fSYwtXSsKcSoPZdYj274xXB1V00RJQ628zc'
);
const backend =
  import.meta.env.VITE_PUBLIC_API_URL || process.env.REACT_PUBLIC_API_URL;

const CheckoutButton: React.FC<{
  product_id: string;
  product_name: string;
  price: number;
  userId: string | undefined;
}> = ({ product_id, product_name, price, userId }) => {
  const handleCheckout = async () => {
    const stripe = await stripePromise;

    try {
      const response = await fetch(`${backend}create-checkout-session`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          product_id: product_id,
          product_name: product_name,
          price: price,
          userId: userId,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create Checkout session');
      }

      const { id } = await response.json();

      // window.alert(`Session ID received from backend:${id}`);

      if (!id) {
        throw new Error('Session ID not returned from backend');
      }

      if (stripe) {
        await stripe.redirectToCheckout({ sessionId: id });
      }
    } catch (error) {
      console.error('Error during checkout:', error);
      alert(`エラーが発生しました: ${error!}`);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded mr-4"
    >
      購入する
    </button>
  );
};

export default CheckoutButton;
