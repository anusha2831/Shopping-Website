import React from 'react';
import { Link } from 'react-router-dom';


function RenderProduct({product}){
    const RenderFeatures =({features})=>{
        if(features.length !==0){
            return(
                <React.Fragment>
                    <p><strong>Features : </strong></p>
                    <ul className="">
                    {features.map((feature,index)=>{
                        return (
                            <li key={index}>
                            {feature}                           
                            </li> 
                        )
                    })}
                    </ul>
                </React.Fragment>
            )
        }
        else{
            return (
                <React.Fragment></React.Fragment>
            )
        }
        
    }
    return(
        <div className="row mt-2 mb-5">         
            <div className="col-md-6">
                <img width="100%" src={product.image} alt={product.name}/>
            </div>
            <div className="col-md-6 product-detail">
                <h5>{product.name}</h5>
                <p className="short-desc">{product.short_description}</p>
                <p><strong>Price : </strong>{product.price}</p>
                <p><strong>Rating : </strong>{product.rating}</p>
                <p><strong>Product Description : </strong><br/>{product.description}</p>
                <RenderFeatures features={product.features} />               
                <a href="/" className="btn btn-dark">Buy</a>
            </div>
        </div>
    )
}
  
 
const ProductDetail = (props) => {
    if (props.product.length !== 0){
        return(
            <div className="container  mt-2">
                <nav aria-label="breadcrumb ">
                    <ol className="breadcrumb bg-transparent">
                        <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">{props.product.name}</li>
                    </ol>
                </nav>
                <RenderProduct product={props.product} />
            </div>
        )
    }
    else{
        return(
            <div></div>
        )
    }
}


export default ProductDetail;