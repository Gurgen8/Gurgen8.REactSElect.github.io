import React, { Component } from 'react';
import Cart from "../helpers/Cart";
import Events from "../helpers/Events";

class ChangeCartQty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: this.props?.qty
    }
  }

 

  changeQty = (qty) => {
    Cart.add(this.props.id, qty);
  }

  setQty = (ev) => {
    if (isFinite(ev.target.value)) {
      if (ev.target.value <= 0) {
        Cart.set(this.props.id, 1);
      } else {
        Cart.set(this.props.id, ev.target.value);
      }
    }
  }

  render() {
    const { qty } = this.state
    return (
      <div className="quantity">
        <div className="pro-qty">
          <span className="dec qtybtn" onClick={() => this.changeQty(-1)}>-</span>
          <input type="text" value={this.props.qty} onChange={this.setQty} />
          <span className="inc qtybtn" onClick={() => this.changeQty(1)}>+</span>
        </div>
      </div>
    );
  }
}

export default ChangeCartQty;
