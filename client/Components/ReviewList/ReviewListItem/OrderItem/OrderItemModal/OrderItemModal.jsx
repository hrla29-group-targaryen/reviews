import React from 'react'
import ReactDOM from "react-dom"
import './orderItemModal.css'

class OrderItemModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      this.props.open
        ? ReactDOM.createPortal(
          <div className="modal">
            <table className="menu-modal-container">
              <tbody>
                <tr>
                  <td valign="top">
                    <div className='modal-menu-item' style={{ backgroundImage: '' }}>
                      <p className='modal-menu-item-content'>{this.props.name}<br />{this.props.price}</p>
                      <div className='modal-close' onClick={this.props.onClose}>&times;</div>
                    </div>
                    <div className='modal-menu-item-description'>{}</div>
                    <div className='modal-menu-item-quantity'>
                      <b>Quantity</b>
                      <span>-</span>
                      <input type="text" maxLength="2" />
                      <span className="tooltip">+</span>
                    </div>
                    <div className='modal-menu-item-special'><b>Special Instructions</b><br></br>
                      <textarea className='instruction' maxLength="400" placeholder="Dressing on the side? No pickles? Let us know here." ></textarea>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td valign="bottom">
                    <div className='bag-bar'><button className='menu-modal-button'>Add to bag: {this.props.price}</button></div>
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
}

export default OrderItemModal;