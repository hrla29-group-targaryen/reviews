import React from 'react';
import './orderItem.css';

const OrderItem = (props) => {
  return (
    <div className="orderItem-order">
      {props.order} +
    </div>
  )
}

export default OrderItem;