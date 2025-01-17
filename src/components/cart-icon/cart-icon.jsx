
import React from 'react';
import ShoppingIcon from '../../assets/shopping-icon';
import "./cart-icon.scss";
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';



const CartIcon = ({ toggleCartHidden, itemCount }) => {
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon"  />
            <span className='item-count'> {itemCount} </span>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => {
        console.log('Toggling cart hidden state'); // Add log here
        dispatch(toggleCartHidden());
    }
});

const mapStateToProps = createStructuredSelector ({
        itemCount: selectCartItemsCount 
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
