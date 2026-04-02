import DeliveryOptions from './DeliveryOptions';
import DeliveryDate from './DeliveryDate';
import CartItemDetails from './CartItemDetails';

function OrderSummary({ cart, deliveryOptions, loadCart }) {
  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 &&
        cart.map((cartItem) => {
          return (
            <div
              className="cart-item-container"
              key={cartItem.productId}
              data-testid="cart-item-container"
            >
              <DeliveryDate cartItem={cartItem} deliveryOptions={deliveryOptions} />

              <div className="cart-item-details-grid">
                <CartItemDetails cartItem={cartItem} loadCart={loadCart} />
                <DeliveryOptions
                  cartItem={cartItem}
                  deliveryOptions={deliveryOptions}
                  loadCart={loadCart}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default OrderSummary;
