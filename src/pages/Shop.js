import React, { Component } from 'react';
import _ from 'lodash'
import Wrapper from "../components/Wrapper";
import SaleOff from "../components/shop/SaleOff";
import CloseSearch from "../helpers/CloseSearch";
import PRODUCTS from '../data/products.json';
import ProductItem from "../components/shop/ProductItem";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import queryString from "query-string";

class Shop extends Component {
  clearSearch = () => {

  }


  render() {
    const { location } = this.props;
    const queryObj = queryString.parse(location.search);
    let products = _.clone(PRODUCTS);
    if (queryObj.cat) {
      products = products.filter(p => p.categories?.includes(+queryObj.cat));
    }
    if (queryObj.col) {
      products = products.filter(p => p.colors?.includes(queryObj.col));
    }
    if (queryObj.max) {
      products = products.filter(p => {
        const price = p.salePrice ? p.salePrice : p.price;
        return _.inRange(+price, +queryObj.min, +queryObj.max + 0.01);
      })
    }
    if (queryObj.size) {
      products = products.filter(p => p.size?.includes(queryObj.size));
    }
    if (queryObj.search) {
      products = products.filter(p => _.toLower(p.name)?.includes(_.toLower(queryObj.search)));
    }
    const productsGroup = _.chunk(products, 3);
    const { page = 1 } = this.props.match.params;
    return (
      <Wrapper>
        <section className="product spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-5">
                <Sidebar />
              </div>
              <div className="col-lg-9 col-md-7">
                <SaleOff />
                <div className="filter__item">
                  <div className="row">
                    <div className="col-lg-4 col-md-5">
                      <div className="filter__sort">
                        <span>Sort By</span>
                        <select>
                          <option value="0">Default</option>
                          <option value="0">Default</option>
                        </select>
                        <div className="nice-select" tabIndex="0"><span className="current">Default</span>
                          <ul className="list">
                            <li data-value="0" className="option selected">Default</li>
                            <li data-value="0" className="option">Default</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <div className="filter__found">
                        <h6><span>{products.length}</span> Products found</h6>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-3">
                      <div className="filter__option">
                        {queryObj.search ? (
                            <CloseSearch />
                        ): null}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  {productsGroup[page - 1]?.map(product => (
                    <div key={product.id} className="col-lg-4 col-md-6 col-sm-6">
                      <ProductItem product={product} />
                    </div>
                  ))}

                </div>
                <div className="product__pagination">
                    <Link to={`/shop/page/${+page > 1 ? +page - 1 : +page}` + window.location.search}><i className="fa fa-long-arrow-right " style={{transform: "scaleX(-1)"}}></i></Link>
                  {_.range(1, productsGroup.length + 1).map(p => (
                    <Link to={`/shop/page/${p}` + window.location.search} className={p === +page ? "active" : ''} key={p} >{p}</Link>
                  ))}
                  <Link to={`/shop/page/${+page + 1 <= productsGroup.length ? +page + 1 : +page}` + window.location.search}><i className="fa fa-long-arrow-right"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Wrapper>
    );
  }
}

export default Shop;
