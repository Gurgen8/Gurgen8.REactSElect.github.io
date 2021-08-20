import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Shop from "./pages/Shop";
import CartPage from "./pages/CartPage";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Slider from './components/Slider.js';
import HeartPage from "./pages/HeartPage"
import ComparePage from "./pages/ComparePages"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/shop/page/:page" component={Shop} />
          <Route path="/shop" component={Shop} />
          <Route path="/cart" component={CartPage} />
          <Route path="/heart" component={HeartPage} />
          <Route path="/compare" component={ComparePage} />
          <Route path="/product/:id" component={ProductPage} />
          <Route path="/shop-detalis.html" component={Slider}   />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
