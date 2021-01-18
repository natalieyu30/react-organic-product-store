import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext}  from '../../context';
import  PayPalButton  from './PayPalButton';

function CartTotals() {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = useGlobalContext();
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-right">
            <Link to='/'>
              <button 
                className="btn btn-outline-danger mb-3 px-5" 
                type='button'
                onClick={() => clearCart()}
              >Clear Cart
              </button>
            </Link>
            <h5>
              <span>Subtotal: </span>
              <strong>$ {cartSubTotal}</strong>
            </h5>
            <h5>
              <span>Tax(HST): </span>
              <strong>$ {cartTax}</strong>
            </h5>
            <h5>
              <span>Total: </span>
              <strong>$ {cartTotal}</strong>
            </h5>
            <PayPalButton total={cartTotal} clearCart={clearCart}></PayPalButton>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartTotals