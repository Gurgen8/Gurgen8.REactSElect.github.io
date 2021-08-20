import React, {Component} from 'react';
import queryString from "query-string";
import {withRouter} from "react-router-dom";


class CloseSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            queryObj: queryString.parse(window.location.search)
        }
    }

    clearSearch = (ev) => {
        const {queryObj} = this.state;
        delete queryObj.search
        this.props.history.replace(`/shop?${queryString.stringify(queryObj)}`)
    }

    render() {
        const {queryObj} = this.state;
        return (
            <span className="icon_ul" onClick={this.clearSearch}>{queryObj?.search}
                <span className="when__hover">Close</span>
            </span>
        );
    }
}

export default withRouter(CloseSearch);