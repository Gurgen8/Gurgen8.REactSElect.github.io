import React, {Component} from 'react';
import PRODUCTS from "../data/products.json";
import Wrapper from "../components/Wrapper";
import Cart from "../helpers/Cart";
import Slide from "../components/Slider";


class ProductPage extends Component {
    constructor(props) {
        super(props);
        const id = window.location.pathname.split('/')[2];
        this.state = {
            product: PRODUCTS.find(p => p.id === +id),
            qty: (Cart.get().find(p => p.id === +id)?.qty || 1)
        }
    }

    qtyChange = (n = 1) => {
        let { qty } = this.state;
        if (qty + n > 0){
            qty += n;
        } else {
            qty = 1
        }
        this.setState({qty})
    }

    qtySet = (ev) => {
        if (isFinite(ev.target.value)) {
            if (ev.target.value <= 0) {
                this.setState({qty: 1})
            } else {
                this.setState({qty: +ev.target.value})
            }
        }
    }

    changeCart = () => {
        const { product, qty } = this.state;
        Cart.set(product.id, qty);
    }

    render() {
        const { product, qty } = this.state;
        return (
            <Wrapper>
            <section className="product-details spad">
                <div className="container">
                    <div className="row">
                        {product ? (
                            <>
                                <div className="col-lg-6 col-md-6">
                                    <div className="product__details__pic">
                                        <div className="product__details__pic__slider owl-carousel owl-loaded owl-drag">
                                            <Slide product={product} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="product__details__text">
                                        <h3>{product.name}</h3>

                                        <div className="product__details__price">${product.salePrice || product.price}</div>
                                        <p>{product.shortDescription}</p>
                                        <div className="product__details__quantity">
                                            <div className="quantity">
                                                <div className="pro-qty">
                                                    <span className="dec qtybtn" onClick={() => this.qtyChange(-1)}>-</span>
                                                    <input type="text" value={qty} onChange={this.qtySet} />
                                                    <span className="inc qtybtn" onClick={() => this.qtyChange(1)}>+</span></div>
                                            </div>
                                        </div>
                                        <div className="primary-btn" onClick={this.changeCart} style={{cursor: 'pointer'}}>ADD TO CARD</div>
                                      
                                        <ul>
                                            <li><b>Availability</b> <span>In Stock</span></li>
                                            <li><b>{product.shipping}</b>
                                                <span>01 day shipping. <samp>Free pickup today</samp></span>
                                            </li>
                                            <li><b>Weight</b> <span>{product.weight} kg</span></li>
                                            <li><b>Share on</b>
                                                <div className="share">
                                                    <a href="https://fb.com"><i className="fa fa-facebook"></i></a>
                                                    <a href="https://fb.com"><i className="fa fa-twitter"></i></a>
                                                    <a href="https://fb.com"><i className="fa fa-instagram"></i></a>
                                                    <a href="https://fb.com"><i className="fa fa-pinterest"></i></a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="product__details__tab">
                                        <ul className="nav nav-tabs" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" data-toggle="tab" href="#tabs-1"
                                                   role="tab"
                                                   aria-selected="true">Description</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-toggle="tab" href="#tabs-2" role="tab"
                                                   aria-selected="false">Information</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-toggle="tab" href="#tabs-3" role="tab"
                                                   aria-selected="false">Reviews <span>(1)</span></a>
                                            </li>
                                        </ul>
                                        <div className="tab-content">
                                            <div className="tab-pane active" id="tabs-1" role="tabpanel">
                                                <div className="product__details__tab__desc">
                                                    <h6>Products Infomation</h6>
                                                    <p>{product.description}</p>
                                                    <p>Praesent sapien massa, convallis a pellentesque nec, egestas non
                                                        nisi.
                                                        Lorem
                                                        ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                                                        blandit
                                                        aliquet
                                                        elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed
                                                        magna
                                                        dictum
                                                        porta. Cras ultricies ligula sed magna dictum porta. Sed
                                                        porttitor
                                                        lectus
                                                        nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar
                                                        a.
                                                        Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                                                        dui.
                                                        Sed
                                                        porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula
                                                        elementum
                                                        sed sit amet dui. Proin eget tortor risus.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <h1>Product not found :(</h1>
                        )}
                    </div>
                </div>
            </section>
            </Wrapper>
        );
    }
}

export default ProductPage;