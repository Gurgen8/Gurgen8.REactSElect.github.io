import React, { Component } from 'react'
import Wrapper from '../components/Wrapper'
import PRODUCTS from "../data/products.json";
import Events from "../helpers/Events";
import { Link } from "react-router-dom";
import _ from "lodash"
import Heart from"../helpers/Heart"
import heartimg from "../assets/images/heart.png"

export default class HeartPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
          heart: Heart.get(),
        
        }
      }

    componentDidMount() {
        Events.on('heartChange', this.handleHeartChange)
      }
    
      componentWillUnmount() {
        Events.remove('heartChange', this.handleHeartChange)
      }
    
      handleHeartChange = () => {
        this.setState({ heart: Heart.get() })
      }
    
      deleteProduct = (productId) => {
        Heart.delete(productId)
      }
    
     
    render() {
        const {heart }=this.state
        return (
            <Wrapper>
             <div className ="prefered-section"> <h1> Preferred products-- </h1><img src={heartimg} alt="heart" /> </div>
              {heart.map(item => {
                        const product = PRODUCTS.find(p => p.id === item.id);
                       
                          
                        if (!product) {
                          return null;
                        }
                        return (
                         <div class="heart-section">
                             <div class="container-heart"> 
                             
                                  <img class="heart-img" style={{width:270,objectFit:"contain"}} src={product.images[0]}/>
                                
                                <div class="item-list">
                                  <ul>
                                    <li>{product.name}</li>
                                    <li>${product.price||product.salePrice}</li>
                                    <li>{product.description}</li>
                                  
                                    <li><b>SIZE--</b>{product.size}</li>
                                    <li>{product.shortDescription}</li>
                                    <li><b>WEIGHT __</b>{product.weight} kg</li>
                                    <li><b>QTY--</b><mark>{product.qty}</mark></li>
                                    <li><mark>SHIPING </mark>--<b>{product.shipping}</b></li>
                                  </ul>
                               </div>
                               <div class="delete-item">    <i onClick={() => this.deleteProduct(item.id)} className="fa fa-trash" /></div>
                             </div>
                         </div>
                        )
                      })}
            </Wrapper>
        )
    }
}





