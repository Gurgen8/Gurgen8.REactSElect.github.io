import React, {Component} from 'react';
import SIZES from '../../data/sizes.json';
import _ from "lodash";
import queryString from "query-string";
import { withRouter } from "react-router-dom";


class SizeFilter extends Component {
    handleClick = (ev) => {
        const queryObj = queryString.parse(window.location.search);
        queryObj.size = ev?.target.id;
        this.props.history.replace(`/shop?${queryString.stringify(queryObj)}`)
    }

    render() {
        return (
            <div className="sidebar__item">
                <h4>Popular Size</h4>

                {SIZES.map((s) =>
                    <div className="sidebar__item__size" key={s.id} onClick={this.handleClick}>
                        <label htmlFor={s.size}>
                            {_.upperFirst(s.size)}
                            <input type="radio" id={s.size} />
                        </label>
                    </div>
                )}

                <div className="sidebar__item__size" onClick={() => this.handleClick()}>
                    <label>
                        All
                        <input type="radio" />
                    </label>
                </div>
            </div>
        );
    }
}

export default withRouter(SizeFilter);