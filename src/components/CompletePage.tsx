import React, { useEffect, useState } from 'react';
import { useStripe } from '@stripe/react-stripe-js';

const CompletePage: React.FC = () => {
  const stripe = useStripe();
  const [status, setStatus] = useState<string>('default');
  const [intentId, setIntentId] = useState<string | null>(null);

  useEffect(() => {
    const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret'
    );
    if (!clientSecret || !stripe) return;

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      if (!paymentIntent) return;
      setStatus(paymentIntent.status || 'default');
      setIntentId(paymentIntent.id || null);
    });
  }, [stripe]);

  return (
    <div>
      <h2>Payment Status: {status}</h2>
      {intentId && <p>Payment Intent ID: {intentId}</p>}
    </div>
  );
};

export default CompletePage;
