import React, { Component } from 'react';
import CATEGORIES from '../../data/categories.json'
import { withRouter } from "react-router-dom";
import queryString from "query-string";

class CategoryFilter extends Component {
  handleClick = (ev, id) => {
    ev.preventDefault();
    const queryObj = queryString.parse(window.location.search);
    queryObj.cat = id;
    this.props.history.replace(`/shop?${queryString.stringify(queryObj)}`)
  }

  render() {
    return (
      <div className="sidebar__item">
        <h4>Department</h4>
        <ul>
          <li>
            <a href="/" onClick={(ev) => this.handleClick(ev)}>
              All
            </a>
          </li>
          {CATEGORIES.map(cat => (
            <li key={cat.id}>
              <a href="/" onClick={(ev) => this.handleClick(ev, cat.id)}>
                {cat.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default withRouter(CategoryFilter);
