import React from 'react';
import { useGlobalContext} from '../context';
import { ButtonContainer } from './Button';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Modal() {
  const { modalProduct, isModalOpen, closeModal} = useGlobalContext();
  const { img, title, price } = modalProduct;

  if (!isModalOpen) {
    return null
  } else {
    return (
      <ModalContainer>
        <div className="container">
          <div className="row">
            <div id='modal' className="col-8 mx-auto col-md-6 col-lg-4 text-center">
              <h5>Item Added to the Cart</h5>
              <img src={img} alt="product" className='img-fluid my-3'/>
              <h5>{title}</h5>
              <h5 className="text-muted mb-5">Price: ${price}</h5>
              <Link to='/'>
                <ButtonContainer 
                  general
                  onClick={()=>closeModal()}>
                  Back to Store
                </ButtonContainer>
              </Link>
              <Link to='/cart'>
                <ButtonContainer 
                  general
                  onClick={()=>closeModal()}>
                  Go to Cart
                </ButtonContainer>
              </Link>
            </div>
          </div>
        </div>
      </ModalContainer>
    )
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  #modal {
    background: var(--mainWhite);
    padding: 3rem;
    border-radius: 5px;
  }
`

export default Modal
