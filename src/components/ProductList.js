import React from 'react';
import Product from './Product';
import Title from './Title';
import {useGlobalContext} from '../context';

function ProductList() {
  const { products } = useGlobalContext();

  return (
    <>
      <div className="py-5">
        <div className="container">
          <Title name='our ' title=' products' />

          <div className="row">
            {products.map(product => {
              return  <Product key={product.id} {...product} />
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductList
