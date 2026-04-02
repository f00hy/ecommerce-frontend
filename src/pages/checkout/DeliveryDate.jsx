import dayjs from '../../utils/dayjs';

function DeliveryDate({ cartItem, deliveryOptions }) {
  const selectedDeliveryOption = deliveryOptions.find((option) => {
    return option.id === cartItem.deliveryOptionId;
  });

  return (
    <div className="delivery-date">
      Delivery date:{' '}
      {dayjs.tz(selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
    </div>
  );
}

export default DeliveryDate;
