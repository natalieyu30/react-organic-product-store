import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ButtonContainer} from './Button';


function Navbar() {
  return (
    <NavWapper className='navbar navbar-expand-sm navbar-dark px-sm-5'>
      <Link to='/'>
        {/* <img src={logo} alt="store logo" className='navbar-brand'/> */}
        <span className='nav-logo'>
          <i className="fab fa-envira"></i>
        </span>
      </Link>
      <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-1">
          <Link to='/' className='nav-link'>Organic Body</Link>
        </li>
      </ul>
      <Link to='/cart' className='ml-auto'>
        <ButtonContainer>
          <span className="mr-2">
            <i className="fas fa-cart-plus"/>
          </span>
          my cart
        </ButtonContainer>
      </Link>
    </NavWapper>
  )
}


const NavWapper = styled.nav`
  background: var(--mainGreen);
  color: var(--mainWhite);
  .nav-logo{
    font-size: 1.8rem;
    color: var(--mainWhite);
  }
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.25rem;
  }

`

export default Navbar
