import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component';
import CardDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden, selectCartTotal } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser, hidden, total }) => {
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/shop'>
          CONTACT
        </Link>
        {
          currentUser ?
            <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
            :
            <Link className='option' to='/signin'>SIGN IN</Link>
        }
        <CartIcon />
        <div style={{ flex: '0 1 60px', paddingTop: '3px', textAlign: 'center' }}>${total}</div>
      </div>
      {
        hidden ? null : <CardDropdown />
      }
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
  total: selectCartTotal
});

export default connect(mapStateToProps)(Header);
