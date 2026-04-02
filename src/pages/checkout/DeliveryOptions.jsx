import axios from 'axios';
import dayjs from 'dayjs';
import { formatMoney } from '../../utils/money';

function DeliveryOptions({ cartItem, deliveryOptions, loadCart }) {
  return (
    <div className="delivery-options">
      <div className="delivery-options-title">Choose a delivery option:</div>
      {deliveryOptions.map((option) => {
        let priceString = 'FREE Shipping';
        if (option.priceCents > 0) {
          priceString = `${formatMoney(option.priceCents)} - Shipping`;
        }

        const updateDeliveryOption = async () => {
          await axios.put(`/api/cart-items/${cartItem.productId}`, {
            deliveryOptionId: option.id,
          });
          await loadCart();
        };

        return (
          <div
            className="delivery-option"
            key={option.id}
            onClick={updateDeliveryOption}
            data-testid="delivery-option"
          >
            <input
              type="radio"
              checked={option.id === cartItem.deliveryOptionId}
              onChange={() => {}}
              className="delivery-option-input"
              name={`delivery-option-${cartItem.productId}`}
              data-testid="delivery-option-input"
            />
            <div>
              <div className="delivery-option-date">
                {dayjs(option.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
              </div>
              <div className="delivery-option-price">{priceString}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DeliveryOptions;
