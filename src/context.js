import React, { useState, useEffect, useContext, useCallback } from 'react';
import { storeProducts } from './data';

// const getLocalStorage = () => {
//   let localCart = localStorage.getItem('cart');
//   if (localCart) {
//     return JSON.parse(localStorage.getItem('cart'))
//   } else {
//     return []
//   }
// }

const AppContext = React.createContext();
// Provider
// Consumer
const AppProvider = ({children}) => {
  const [products, setProducts] = useState([]);
  const [singleProduct, setSingleProduct] = useState({});
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState({});
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const [cartTax, setCartTax] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const mainProducts = () => {
    let products = []
    storeProducts.forEach(item => {
      const singleItem = {...item};
      products = [...products, singleItem];
    })
    setProducts(products);
  }
  useEffect(() => {
    mainProducts()
  }, [])

  const getItem = (id) => {
    const item = products.find(product => product.id === id);
    return item;
  }
  const handleDetail = (id) => {
    const item = getItem(id);
    setSingleProduct(item);
  }

  const addToCart = (id) => {
    let item = getItem(id);
    item.inCart = true;
    item.count = 1;
    const price = item.price;
    item.total = price;
    setCart([...cart, item]);
  }

  const openModal = (id) => {
    const product = getItem(id);
    setModalProduct(product);
    setIsModalOpen(true);
  }
  
  const closeModal = id => setIsModalOpen(false);

  const increase = (id) => {
    let tempCart = [...cart];
    let product = tempCart.find(item => item.id === id);
    product.count = product.count +1;
    product.total = product.count * product.price;
    setCart([...tempCart])
  }

  const decrease = (id) => {
    let tempCart = [...cart];
    let product = tempCart.find(item => item.id === id);
    product.count = product.count -1;
    if (product.count === 0) {
      removeItem(product.id)
    } else {
      product.total = product.count * product.price;
      setCart([...tempCart])
    }
  }

  

  const removeItem = (id) => {
    const filteredItems = cart.filter(item => item.id !== id)
    setCart(filteredItems)
    let tempProducts = [...products];
    let item = tempProducts.find(product => product.id === id);
    item.inCart = false;
    setProducts([...tempProducts])
  }
  
  const clearCart = () => {
    setCart([])
    mainProducts()
  } 

  const addTotals = useCallback(() => {
    let subTotal = 0;
    cart.map(item => subTotal += item.total);
    setCartSubTotal(subTotal.toFixed(2));
    const tempTax = parseFloat((subTotal * 0.13).toFixed(2));
    setCartTax(tempTax);
    setCartTotal((subTotal + tempTax).toFixed(2));
  }, [cart]) 

  // useEffect(() => {
  //   localStorage.setItem('cart', JSON.stringify(cart))
  // }, [cart])

  useEffect(() => {
    addTotals();
  }, [cart, addTotals])

  return (
    <AppContext.Provider value={{products, singleProduct, handleDetail, addToCart, cart, modalProduct, isModalOpen, openModal, closeModal, increase, decrease, removeItem, clearCart, cartSubTotal, cartTax, cartTotal}}>
      {children}
    </AppContext.Provider>
  )
}


export const useGlobalContext = () => {
  return useContext(AppContext)
}

export {AppContext, AppProvider};