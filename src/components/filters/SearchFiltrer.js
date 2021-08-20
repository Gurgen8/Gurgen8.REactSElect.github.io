import React, {Component} from 'react';
import queryString from "query-string";
import { withRouter } from "react-router-dom";


class SearchFilter extends Component {
    handleSubmit = (ev) => {
        ev.preventDefault()
        const queryObj = queryString.parse(window.location.search);
        queryObj.search = this.search.value ? this.search.value : undefined;
        this.props.history.replace(`/shop?${queryString.stringify(queryObj)}`)
    }

    render() {
        return (
            <form action="" onSubmit={this.handleSubmit}>
                <div className="hero__search__categories">
                    All Categories
                    <span className="arrow_carrot-down"></span>
                </div>
                <input type="text" placeholder="What do you need?" ref={el => this.search = el} />
                <button type="submit" className="site-btn">SEARCH</button>
            </form>
        );
    }
}

export default withRouter(SearchFilter);