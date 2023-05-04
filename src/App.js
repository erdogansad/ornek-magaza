import React, {useState, useEffect} from 'react'
import {Route, Switch} from "react-router-dom";
import axios from 'axios';

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import Product from './components/pages/Product';
import Contact from "./components/pages/Contact";
import Cart from "./components/pages/Cart";

const App = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios.get("https://64517f5ba322196911649cd9.mockapi.io/foods")
    .then(resp => {
      setFoods(resp.data);
    })
  }, [])

  return (
    <>
    <Header/>

    <Switch>
      <Route exact path="/"><Home foods={foods}/></Route>
      <Route path="/urun/:urunId"><Product/></Route>
      <Route path="/iletisim"><Contact/></Route>
      <Route path="/sepet"><Cart/></Route>
    </Switch>

    <Footer/>
    </>
  )
}

export default App