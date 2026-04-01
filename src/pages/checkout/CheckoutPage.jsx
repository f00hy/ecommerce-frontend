import axios from 'axios';
import { useState, useEffect } from 'react';
import CheckoutHeader from './CheckoutHeader';
import OrderSummary from './OrderSummary';
import PaymentSummary from './PaymentSummary';
import './CheckoutPage.css';

function CheckoutPage({ cart, loadCart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  useEffect(() => {
    const loadDeliveryOptions = async () => {
      const response = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime');
      setDeliveryOptions(response.data);
    };
    loadDeliveryOptions();
  }, []);

  useEffect(() => {
    const loadPaymentSummary = async () => {
      const response = await axios.get('/api/payment-summary');
      setPaymentSummary(response.data);
    };
    loadPaymentSummary();
  }, [cart]);

  return (
    <>
      <link rel="icon" type="image/png" href="cart-favicon.png" />
      <title>Checkout</title>

      <CheckoutHeader cart={cart} />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary cart={cart} deliveryOptions={deliveryOptions} loadCart={loadCart} />
          <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart} />
        </div>
      </div>
    </>
  );
}

export default CheckoutPage;
