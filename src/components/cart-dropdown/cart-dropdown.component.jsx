import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import {selectCartItems} from '../../redux/cart/cart.selectors'
import {toggleCartHidden} from '../../redux/cart/cart.actions'
import CartItem from '../cart-item/cart-item.component'
import CustomButton from '../custom-button/custom-button.component';
import {withRouter} from 'react-router-dom'

import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems, history, toggleCartHidden}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.length ? 
                cartItems.map((item) => (
                    <CartItem key={item.id} item={item} />
                )) :
                <span className="empty-message">Your cart is empty</span>
            }
        </div>
        <div className="button">
            <CustomButton onClick={() => {
                toggleCartHidden();
                history.push('/checkout')
            }}
            >Go To Checkout</CustomButton>
        </div>

    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));