import React, { Component } from 'react';
import Headers from './Headers';
import Footer from "./Footer";


class Wrapper extends Component {
  render() {
    return (
      <>
    
        <Headers />
        {this.props.children}
        <Footer />
      </>
    );
  }
}

export default Wrapper;
