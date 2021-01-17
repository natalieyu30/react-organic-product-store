import React from 'react';
import { useGlobalContext } from '../../context';

function CartItem({id, title, price, img, total, count}) {
  const { increase, decrease, removeItem } = useGlobalContext();
  return (
    <div className='row my-4 text-center d-flex align-items-center'>
      <div className="col-10 mx-auto col-lg-2">
        <img src={img} style={{width:'5rem'}} alt="product" className='img-fluid'/>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Product : </span>{title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Price : </span>${price}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div className='div-block'>
            <span className="btn-block first" onClick={() => decrease(id)}>-</span>
            <span className="btn-block btn-amount">{count}</span>
            <span className="btn-block" onClick={() => increase(id)}>+</span>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="col-10 mx-auto col-lg-2">
        <span className="cart-icon" onClick={() => removeItem(id)}>
          <i className="fas fa-trash"></i>
        </span>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong>Total : ${total}</strong>
      </div>
    </div>
  )
}

export default CartItem
