import React, {Component} from 'react';
import COLORS from '../../data/colors.json';
import _ from "lodash";
import queryString from "query-string";
import { withRouter } from "react-router-dom";


class ColorFilter extends Component {
    handleClick = (ev) => {
        const queryObj = queryString.parse(window.location.search);
        queryObj.col = ev?.target.id;
        this.props.history.replace(`/shop?${queryString.stringify(queryObj)}`)
    }

    render() {
        return (
            <div className="sidebar__item sidebar__item__color--option">
                <h4>Colors</h4>

                {COLORS.map((c) =>
                    <div className={`sidebar__item__color sidebar__item__color--${c.color}`} key={c.id} onClick={this.handleClick}>
                        <label htmlFor={c.color}>
                            {_.upperFirst(c.color)}
                            <input type="radio" id={c.color} />
                        </label>
                    </div>
                )}

            </div>
        );
    }
}

export default withRouter(ColorFilter);