import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Events from "../helpers/Events";
import Cart from "../helpers/Cart";

class CartButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartLength: Cart.get().length
    }
  }

  componentDidMount() {
    Events.on('cartChange', this.handleCartChange)
    
  }

  componentWillUnmount() {
    Events.remove('cartChange', this.handleCartChange)
  }

  handleCartChange = (cart) => {
    this.setState({ cartLength: cart.length })
  }

  render() {
    const { cartLength } = this.state;
    return (
      <Link to="/cart">
        <i className="fa fa-shopping-bag"></i>
        <span>{cartLength}</span>
      </Link>
    );
  }
}

export default CartButton;
