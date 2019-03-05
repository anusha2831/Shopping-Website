import React, { Component } from 'react';
import { PRODUCTS } from '../assets/json/products';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './homeComponent';
import ProductDetail from './productDetailComponent';
import Services from './servicesComponent';
import FindStore from './findStoreComponent';
import Header from './headerComponent';
import Footer from './footerComponent';

class Main extends Component{

   constructor(props){
       super(props);
       this.state={
           products: PRODUCTS
       }
   }  

   render(){
    const ProductwithId = ({match}) =>{
       return(
           <ProductDetail product={this.state.products.filter((prod)=> prod.id===parseInt(match.params.productId,10)[0])} />
       )
    }
       return(
           <div>
               <Header />
               <Switch>
                    <Route exact path="/home" component={()=><Home products={this.state.products}/>} />
                    <Route path="/product/:productId" component={ProductwithId} />
                    <Route path="/services" component={Services} />
                    <Route exact path="/findstore" component={FindStore} />
                    <Redirect to="/home" />
               </Switch>
               <Footer />
           </div>
       )
   }


}

export default Main;