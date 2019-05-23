import React from 'react'
import ReactDOM from "react-dom"
import './orderItemModal.css'

const OrderItemModal = (props) => {
  return (
    props.open ?
      ReactDOM.createPortal(
        <div className="orderItemModal-main">
          <table className="orderItemModal-container">
            <tbody>
              <tr>
                <td className="orderItemModal-td" valign="top">
                  <div className='orderItemModal-item'>
                    <p className='orderItemModal-content'>{props.name}<br />{props.price}</p>
                    <div className='orderItemModal-close' onClick={props.onClose}>&times;</div>
                  </div>
                  <div className='orderItemModal-quantity'>
                    <b>Quantity</b>
                    <span className="orderItemModal-subtract"> - </span>
                    <input className="orderItemModal-quantityInput" type="text" maxLength="2" value="1" />
                    <span className="orderItemModal-add"> + </span>
                  </div>
                  <div className='orderItemModal-special'><b>Special Instructions</b><br></br>
                    <textarea className='orderItemModal-instruction' maxLength="400" placeholder="Dressing on the side? No pickles? Let us know here." ></textarea>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="orderItemModal-td" valign="bottom">
                  <div className='orderItemModal-addToBag'><button className='orderItemModal-button'>Add to bag: {props.price}</button></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>,
        document.body
      )
      : null
  )
}

export default OrderItemModal;