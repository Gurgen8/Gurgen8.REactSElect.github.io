import React, { Component } from 'react';
import queryString from "query-string";
import Cart from "../../helpers/Cart";
import { Link } from "react-router-dom";
import Heart from '../../helpers/Heart'
import Compare from '../../helpers/Compare'

class ProductItem extends Component {
  markText = (text) => {
    const { search = '' } = queryString.parse(window.location.search);
    return text.replace(new RegExp(search, 'ig'), '<i style="background-color: yellow"}>$&</i>')
  }
  addToCart = (ev) => {
    ev.preventDefault();
    const { product } = this.props;
    Cart.add(product.id, 1);
  }
  addToHeart = (ev) => {
    ev.preventDefault();
    const { product } = this.props;
    Heart.add(product.id, 1);
  }

  addToCompare = (ev) => {
    ev.preventDefault();
    const { product } = this.props;
    Compare.add(product.id, 1);
  }

  handleClick = (ev) => {
    if (ev.target.closest('.disableLink')) {
      ev.preventDefault();
    }
  }

  render() {
    const { product } = this.props;

    return (
      <div className="product__item">
        <Link to={`/product/${product.id}`} onClick={this.handleClick}>
          <div className="product__item__pic set-bg"
               style={{ backgroundImage: `url(${product.images[0]})` }}>
            {product.salePrice ? (
              <div className="product__discount__percent">
                {+((product.price - product.salePrice) / product.price * 100).toFixed(2)}%
              </div>
            ) : null}
            <ul className="product__item__pic__hover disableLink">
              <li>
                <a onClick={this.addToHeart} style={{cursor:'pointer'}} href="/"><i className="fa fa-heart"></i></a></li>
              <li><a onClick={this.addToCompare} style={{cursor:'pointer'}}  href="/"><i className="fa fa-retweet"></i></a></li>
              <li>
                <a href="/" onClick={this.addToCart} style={{ cursor: "pointer" }}>
                  <i className="fa fa-shopping-cart"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="product__item__text">
            <h6>
              <div dangerouslySetInnerHTML={{ __html: this.markText(product.name) }} />
            </h6>
            {product.salePrice ? (
              <div className="product__item__price">
                ${product.salePrice}
                <span>${product.price}</span>
              </div>
            ) : (
              <h5>${product.price}</h5>
            )}
          </div>
        </Link>

      </div>
    );
  }
}

export default ProductItem;
