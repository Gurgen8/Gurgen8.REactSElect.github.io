import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Events from "../helpers/Events";
import Compare from "../helpers/Compare"

class ComparetButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
     compareLength: Compare.get().length
     
    }
  }

  componentDidMount() {
    Events.on('compareChange', this.handleCompareChange)
    
    
  }

  componentWillUnmount() {
    Events.remove('compareChange', this.handleCompareChange)
  }

  handleCompareChange = (compare) => {
    this.setState({ compareLength: compare.length })

    
  }

  render() {
    const { compareLength } = this.state;
    return (
      <Link to="/compare">
     <i className="fa fa-retweet"></i>
        <span>{compareLength }</span>
      </Link>
    );
  }
}

export default ComparetButton
