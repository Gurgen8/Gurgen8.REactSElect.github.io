import React, { Component } from 'react';
import Wrapper from "../components/Wrapper";
import Cart from "../helpers/Cart";
import PRODUCTS from "../data/products.json";
import Events from "../helpers/Events";
import ChangeQty from "../components/ChangeCartQty";
import { Link } from "react-router-dom";
import _ from "lodash"






class CartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: Cart.get(),
    
    }
  }

  componentDidMount() {
    Events.on('cartChange', this.handleCartChange)
  }

  componentWillUnmount() {
    Events.remove('cartChange', this.handleCartChange)
  }

  handleCartChange = () => {
    this.setState({ cart: Cart.get() })
  }

  deleteProduct = (productId) => {
    Cart.delete(productId)
  }

 
 

  render() {
    const { cart } = this.state;
   
    return (
      <Wrapper>
        <section className="shoping-cart spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="shoping__cart__table">
                  <table>
                    <thead>
                      <tr>
                        <th style={{overflow: 'hidden'}} className="shoping__product">
                         
                        </th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map(item => {
                        const product = PRODUCTS.find(p => p.id === item.id);
                       
                          
                        if (!product) {
                          return null;
                        }
                        return (
                          
                          <tr key={product.id}>
                            
                            <td className="shoping__cart__item">
                              <Link to={`/product/${product.id}`}>
                                <img
                                  width={100}
                                  height={100}
                                  src={product.images[0]}
                                  alt="" />
                                <h5>{product.name}</h5>
                              </Link>
                            </td>
                            <td className="shoping__cart__price">
                              ${product.price}
                            </td>
                            <td className="shoping__cart__quantity">
                              <ChangeQty id={item.id} qty={item.qty} />
                            </td>
                            <td className="shoping__cart__total">
                                  ${product.price * item.qty}     
                       
                            </td>
                            <td className="shoping__cart__item__close">
                              <i onClick={() => this.deleteProduct(item.id)} className="fa fa-trash" />
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="row">

              <div className="col-lg-6">
                <div className="shoping__continue">
                  <div className="shoping__discount">
                    <h5>Discount Codes</h5>
                    <form action="#">
                      <input type="text" placeholder="Enter your coupon code" />
                      <button type="submit" className="site-btn">APPLY COUPON</button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="shoping__checkout">
                    <h5>Cart Total</h5>
                    <ul>
                        <li>Subtotal <span>{cart.map(item => {
                        const product = PRODUCTS.find(p => p.id === item.id);
                    
                        if (!product) {
                          return null;
                        }return(
                          <>
                          {_.reduce(product, function(i,n) {
 
                            return  (+product.price* item.qty)
                              

                        })}
                          </>
 
                        )
                      })}</span></li>
                     
                    </ul>
                    <a href="#" className="primary-btn">PROCEED TO CHECKOUT</a>
                </div>
            </div>
            </div>
          </div>
        </section>
      </Wrapper>
    );
  }
}

export default CartPage;
