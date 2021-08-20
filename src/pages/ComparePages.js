import React, { Component } from 'react'
import Wrapper from '../components/Wrapper'
import PRODUCTS from "../data/products.json";
import Events from "../helpers/Events";
import { Link } from "react-router-dom";
import _ from "lodash"
import Compare from '../helpers/Compare'



export default class ComparetPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
          compare: Compare.get(),
        
        }
      }

    componentDidMount() {
        Events.on('compareChange', this.handleCompareChange)
      }
    
      componentWillUnmount() {
        Events.remove('compareChange', this.handleCompareChange)
      }
    
     handleCompareChange = () => {
        this.setState({ compare: Compare.get() })
      }
    
      deleteProduct = (productId) => {
      Compare.delete(productId)
      }
    


     
    render() {
        const {compare}=this.state
        return (
            <Wrapper>
             <div className ="compare-page"> <h1> Compare Page </h1></div>
              <div class="compare">
              {compare.map(item => {
                        const product = PRODUCTS.find(p => p.id === item.id);
                       
                          
                        if (!product) {
                             return null
                        }
                       else{return ( <>
                     
                        <div class="container-compare"> 
                        
                           <div>  <img  src={product.images[0]}/></div>
                   
                           <div class="items">
                           
                               <ul>
                                
                               <li>{product.name}</li>
                               <li>${product.price||product.salePrice}</li>
                               <li><b>SIZE--</b>{product.size}</li>
                               <li><b>WEIGHT __</b>{product.weight} kg</li>
                               <li><b>QTY--</b><mark>{product.qty}</mark></li>
                               <li><mark>SHIPING </mark>--{product.shipping}</li>
                             </ul>
                             </div>          
                          <div class="remove-item">    <i onClick={() => this.deleteProduct(item.id)} className="fa fa-trash" /></div>
                         
                        </div>
                         <div class="vs"> VS </div>
                         </>
                   
                   )} 
                      })}
                       
                      </div>
            </Wrapper>
        )
    }
}





