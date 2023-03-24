import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

function ShippingForm(props) {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const cardElement = elements.getElement(CardElement);

    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.error(error);
    } else {
      const response = await fetch('/charges', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ payment_method_id: paymentMethod.id })
      });

      if (response.ok) {
        // Payment succeeded
        console.log('Payment succeeded!');
      } else {
        // Payment failed
        console.error('Payment failed.');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit">Pay</button>
    </form>
  );
}

export default ShippingForm;