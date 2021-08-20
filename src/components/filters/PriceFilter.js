import React, { Component } from 'react';
import queryString from "query-string";
import _ from "lodash";
import { withRouter } from "react-router-dom";
import { Range } from 'rc-slider';
import PRODUCTS from "../../data/products.json";

class PriceFilter extends Component {
  handleChange = ([min, max]) => {
    const queryObj = queryString.parse(window.location.search);
    queryObj.min = min;
    queryObj.max = max;
    this.props.history.replace(`/shop?${queryString.stringify(queryObj)}`)
  }

  render() {
    const queryObj = queryString.parse(window.location.search);
    const product = _.maxBy(PRODUCTS, (p) => +p.salePrice || +p.price)
    const maxPrice = Math.ceil(+product.salePrice ||  +product.price);
    return (
      <div className="sidebar__item" style={{ width: 200 }}>
        <h4>Price</h4>
        <div className="price-range-wrap">
          <Range
            min={0}
            max={maxPrice}
            value={[queryObj.min || 0, queryObj.max || maxPrice]}
            onChange={this.handleChange}
            tipFormatter={value => `${value}%`}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(PriceFilter);
