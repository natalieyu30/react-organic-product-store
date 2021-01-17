import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart/Cart';
import Default from './components/Default';
import Modal from './components/Modal';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'><ProductList /></Route>
          <Route path='/details'><Details /></Route>
          <Route path='/cart'><Cart /></Route>
          <Route path='*'><Default /></Route>
        </Switch>
        <Modal />
      </Router>
    </>
  );
}

export default App;
