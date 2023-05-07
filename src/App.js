import React, {useState, useEffect} from 'react'
import {Route, Switch} from "react-router-dom";
import axios from 'axios';

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import Product from './components/pages/Product';
import Contact from "./components/pages/Contact";
import Cart from "./components/pages/Cart";
import { Container } from 'reactstrap';

const App = () => {
  const [foods, setFoods] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get("https://64517f5ba322196911649cd9.mockapi.io/foods")
    .then(resp => {
      setFoods(resp.data);
    })
  }, []);


  const addToCart = (product) => cart.find(item => item.id === product.id) === undefined && setCart(oldCart => [...oldCart, product])
  const deleteFromCart = (id) => setCart(cart.filter(dt => dt.id !== id));

  return (
    <div className='d-flex flex-column vh-100 min-vh-100'>
      <Header cartCount={cart.length}/>
      <Container>
        <Switch>
          <Route exact path="/"><Home foods={foods} addToCart={addToCart}/></Route>
          <Route path="/iletisim"><Contact/></Route>
          <Route path="/sepet"><Cart cart={cart} deleteFromCart={deleteFromCart}/></Route>
          <Route path="/:category/:productName"><Product foods={foods} addToCart={addToCart}/></Route>
        </Switch>
      </Container>
      <Footer/>
    </div>
  )
}

export default App