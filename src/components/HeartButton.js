import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Events from "../helpers/Events";

import Heart from "../helpers/Heart"

class HeartButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heartLength: Heart.get().length
    }
  }

  componentDidMount() {
    Events.on('heartChange', this.handleHeartChange)
    
  }

  componentWillUnmount() {
    Events.remove('heartChange', this.handleHeartChange)
   
  }

  handleHeartChange = (heart) => {
    this.setState({ heartLength: heart.length })
  }

  render() {
    const { heartLength } = this.state;
    return (
      <Link to="/heart">
    <i className="fa fa-heart"></i> <span>{heartLength }</span>
      </Link>
    );
  }
}

export default HeartButton;
