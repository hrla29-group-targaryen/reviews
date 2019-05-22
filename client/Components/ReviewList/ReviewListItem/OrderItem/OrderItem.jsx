import React from 'react';

import './orderItem.css';

const OrderItem = (props) => {
  let prices = ['$3.49', '$4.49', '$5.49', '$6.49', '$7.49', '$8.49', '$9.49', '$10.49', '$11.49', 
  '$3.99', '$4.99', '$5.99', '$6.99', '$7.99', '$8.99', '$9.99', '$10.99', '$11.99', 
  '$12.99', '$13.99', '$14.99', '$15.99',]
  let randomPrice = prices[Math.floor(Math.random() * prices.length)];

  return (
    <div className="orderItem-order">
      <div className="orderItem-tooltip">{props.order} +
        <div className="orderItem-tooltiptext">
          <h6 className="orderItem-name">{props.order}</h6>
          <div className="orderItem-price">{randomPrice}+</div>
          <button className="orderItem-add">Add to bag</button>
        </div>
      </div>
    </div>
  )
}

export default OrderItem;