import React from 'react';
import { connect } from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

import './cart-item.styles.scss';

const CartItem = ({ item: { imageUrl, price, name, quantity }, item, clearItem, addItem, removeItem }) => (
    <div className='cart-item'>
        <img src={imageUrl} alt='item' />
        <div className='item-details'>
            <div className='name flex-row'>{name}</div>
            <div className="flex-row">
                <div className="arrow" style={{ marginRight: 10 }} onClick={() => removeItem(item)}>&#10094;</div>
                <div className='price'>
                    {quantity} x ${price}
                </div>
                <div className="arrow" style={{ marginLeft: 10 }} onClick={() => addItem(item)}>&#10095;</div>
                <div style={{ marginLeft: 'auto', cursor: 'pointer' }} onClick={() => clearItem(item)}>&#10005;</div>
            </div>
        </div>
    </div>
);

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CartItem);