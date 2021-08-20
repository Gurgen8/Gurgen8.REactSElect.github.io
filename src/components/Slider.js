import React, { Component } from "react";
import Slider from "react-slick";
import PRODUCT from "../data/products.json"





export default class Slids extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    
    };
  
     return (
     <div class="product__details__pic__item">
     <Slider {...settings}>
              {PRODUCT.map(p=><div class="div" key={p.id}> <img src={p.images[0]} alt={p.name}/>
              <div class="price">${p.price}</div>
                <div class="price">kg {p.weight}</div>
               </div>)}     
             </Slider>
     </div>
    
     )
     
  
}
}


