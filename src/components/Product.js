import React from 'react';
import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Product({id, title, img, price, inCart}) {
  const { handleDetail, addToCart,  openModal} = useGlobalContext();
  return (
    <ProductWrapper className='col-9 mx-auto col-md-6 col-lg-3 my-3'>
      <div className="card">
        <div className="img-container px-4 pt-5 pb-3" onClick={() => handleDetail(id)}>
          <Link to='/details'>
            <img src={img} alt="product" className='card-img-top'/>
          </Link>
          <button 
            className="cart-btn" 
            disabled={inCart ? true : false} 
            onClick={() => {
              addToCart(id);
              openModal(id);
              }}
            >
              {inCart ? (
                <span className='mb-0' disabled>In Cart</span>
              ) : (
                <span><i className="fas fa-cart-plus" /></span>
              )}
          </button>
        </div>

        {/* card footer */}
        <div className="card-footer d-flex justify-content-between">
          <p className="align-self-center mb-0">{title}</p>
          <h5 className="text-dark font-italic mb-0">
            <span className="mr-1">$</span>
            {price}
          </h5>
        </div>
      </div>
    </ProductWrapper>
  )
}

Product.prototype = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired, 
  inCart: PropTypes.bool.isRequired
}

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 0.4s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 0.4s linear;
  }
  &:hover {
    .card {
      border: 2px solid var(--transGreen);
      box-shadow: 2px 2px 5px 0px var(--transGreen);
    }
    .card-footer {
      background: rgb(247,247,247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    // width: 100%;
    // hegith: 100%;
    transition: all 0.4s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.1);
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.3rem 0.6rem;
    background: var(--mainWhite);
    color: var(--mainGreen);
    font-size: 1.4rem;
    border: none;
    border-radius: 0.7rem 0 0 0;
    transition: all 0.5s linear;
    transform: translate(100%, 100%);
  }
  .cart-btn:focus {
    outline: none;
  }
  .img-container:hover .cart-btn {
    transform: translate(0,0);
  }
  .cart-btn:hover {
    background: var(--mainGreen);
    color: #f4f6f7;
  }
`

export default Product;
