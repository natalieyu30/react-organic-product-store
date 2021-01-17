import React from 'react';
import { Link } from 'react-router-dom';
import {useGlobalContext} from '../context';
import { ButtonContainer } from './Button';

function Details() {
  const { singleProduct, addToCart, openModal } = useGlobalContext();
  const {id, title, img, price, company, info, inCart} = singleProduct;
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-10 mx-auto text-center text-slanted text-dark my-5">
          <h1>{title}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <img src={img} alt="product" className='img-fluid' />
        </div>
        <div className="col-10 mx-auto col-md-6 my-3">
          <h4>Model : {title}</h4>
          <h6 className="text-title text-muted mt-3 mb-2">
            Made By : <span>{company}</span>
          </h6>
          <h4 className="text-dark">
            price: <span>$</span>{price}
          </h4>
          <p className="font-weight-bold mt-3 mb-0">
            Details for Product: 
          </p>
          <p className="text-muted">{info}</p>
          {/* buttons */}
          <Link to='/'>
            <ButtonContainer general>Back to Products</ButtonContainer>
          </Link>
          <ButtonContainer 
            general
            disabled={inCart? true: false}
            onClick = {()=> {
              addToCart(id);
              openModal(id);
            }}
            >
            {inCart ? 'In Cart' : 'Add to Cart'}
          </ButtonContainer>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Details
