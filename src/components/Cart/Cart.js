import React from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import CartList from './CartList';
import CartTotals from './CartTotals';
import EmptyCart from './EmptyCart';
import { useGlobalContext}  from '../../context';


function Cart() {
  const { cart } = useGlobalContext();

  if (cart.length === 0) {
    return (
      <section>
        <EmptyCart />
      </section>
    )
  } else {
    return (
      <section>
        <Title name="Your" title=" Cart" />
        <CartColumns />
        <CartList />
        <CartTotals />
      </section>
    )
  }
}

export default Cart
