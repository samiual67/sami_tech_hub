import React from 'react';
import CartItems from '../Components/CartItems/CartItems';
import './Cart.css';

const Cart = () => {
  return (
    <div>
      <h1>Your Shopping Cart</h1>
      <CartItems />
    </div >
  );
};

export default Cart;
