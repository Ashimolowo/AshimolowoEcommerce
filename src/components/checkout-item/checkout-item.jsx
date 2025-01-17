import React from 'react';
import './checkout-item.scss'
import CartItem from './../cart-item/cart-item';
import { connect } from 'react-redux';
import { AddItem, clearItemFromCart, removeItem } from '../../redux/cart/cart.actions';


const CheckoutItem = ({ cartItem, clearItem , AddItem, removeItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    return ( 
        <div className="checkout-item">
            <div className="image-container">
                <img  src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
              <div className="arrow" onClick={() => {removeItem(cartItem) }}>&#10094;</div>
                <span className="value">{quantity}</span>
              <div className="arrow" onClick={() => {AddItem(cartItem) }}>&#10095;</div>
              </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => {
              clearItem(cartItem)
            }
            }>&#10005;</div>
        </div>
     );
}
 const mapDispatchToProps = (dispatch) => ({
    clearItem: (item) => {
      dispatch(clearItemFromCart(item))
    },
    AddItem: (item) => {
      dispatch(AddItem(item))
    },
    removeItem: (item) => {
      dispatch(removeItem(item))
    }
    
 })
 
export default connect(null, mapDispatchToProps)(CheckoutItem);