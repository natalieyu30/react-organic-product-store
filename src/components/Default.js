import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

export default class Default extends Component {
  render() {
    // console.log(this.props)
    return (
      <div className='container'>
        <div className="row">
          
          <div className="col-10 mx-auto text-center pt-5">
            <h1 className="display-3">404</h1>
            <h1>Error</h1>
            <h2 >Page Not Found</h2>
            <h3 className='pt-2 pb-5'>The requested URL was not found</h3>
            <Link to='/'>
              <ButtonContainer general >Bact to Products</ButtonContainer>
            </Link>
          </div>
        </div>
      </div>
    )
  }
  
  
}
