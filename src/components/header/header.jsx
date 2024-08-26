import React from 'react'
import "./header.scss";
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.jsx';
import {auth} from "../../firebase/firebase.utils.js";
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.jsx';
import CartDropdown from '../cart-dropdown/cart-dropdown.jsx';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors.js';
import { selectCurrentUser } from '../../redux/user/user.selectors.js';



const Header = ({currentUser, hidden}) => {

    

    return ( <div className="header">
        <Link className='logo-container' to="/">
           <Logo className="logo" />
         </Link>
         <div className="options">
            <Link className="option" to='/shop'>
                SHOP
            </Link>
            <Link className="option" to='/contact'>
                CONTACT
            </Link>

            {
                currentUser ? 
                (<div className='option' onClick={() => {auth.signOut()} }>SIGN OUT</div>) 
                : 
               ( <Link className='option' to='/signin'>SIGN IN</Link>)
            }
            <CartIcon />
         </div>
        {
        hidden ? null :
        <CartDropdown />}
    </div> );
};


// const mapStateToProps = (state) => ({
// currentUser: selectCurrentUser(state),
// hidden: selectCartHidden(state)
// })
//instead of the above you can simply

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
    })
 
export default connect(mapStateToProps)(Header);