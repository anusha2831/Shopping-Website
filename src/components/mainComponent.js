import React, { Component } from 'react';
import { PRODUCTS } from '../assets/json/products';
import { SERVICES } from '../assets/json/services';
import { LOCATIONS } from '../assets/json/locations';
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
           products: PRODUCTS,
           services: SERVICES,
           locations: LOCATIONS
       }
   }  
   componentDidMount () {
    this.setState({
        products: PRODUCTS,
        services: SERVICES,
        locations: LOCATIONS
      });
   }
   render(){
    const ProductwithId = ({match}) =>{
       return(
           <ProductDetail product={this.state.products.filter((prod)=> prod.id===parseInt(match.params.productId,10))[0]} />
       )
    }
       return(
           <div>
               <Header />
               <Switch>
                    <Route exact path="/home" component={()=><Home products={this.state.products}/>} />
                    <Route path="/product/:productId" component={ProductwithId} />
                    <Route path="/services" component={()=><Services services={this.state.services}/>} />
                    <Route  path="/findstore" component={()=><FindStore locations={this.state.locations} />} />
                    <Redirect to="/home" />
               </Switch>
               <Footer />
           </div>
       )
   }


}

export default Main;