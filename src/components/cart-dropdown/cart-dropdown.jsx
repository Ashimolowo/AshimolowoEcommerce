

import React from 'react';
import CustomButton from '../custom-button/custom.button';
import './cart-dropdown.scss';
import CartItem from '../cart-item/cart-item';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { useNavigate } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';


const CartDropdown = ({ cartItems, dispatch }) => {
    const navigate = useNavigate(); // Use the navigate hook
    
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length ? (
                        cartItems.map(cartItem => (
                            <CartItem key={cartItem.id} item={cartItem} />
                        ))
                    ) : (
                        <span className="empty-message">Your cart is empty</span>
                    )
                }
            </div>
            <CustomButton onClick={() => {
              navigate('/checkout');
              dispatch(toggleCartHidden())
            
            }}>CHECKOUT</CustomButton> {/* Use navigate */}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartDropdown);
