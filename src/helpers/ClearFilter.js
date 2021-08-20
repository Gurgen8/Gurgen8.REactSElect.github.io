import React, { Component } from 'react';

class PriceFilter extends Component {
    clearFilter = () => {
        window.location.href = window.location.href.split('?')[0]
    }

    render() {
        const url = window.location.href.split('?')
        return(
            <>
                { url.length > 1 ? (
                        <div className="clear" onClick={this.clearFilter}>Clear All Filters</div>
                    ) : null }
            </>
        );
    }
}

export default PriceFilter;
