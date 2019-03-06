import React from 'react';
import { Link } from 'react-router-dom'

function GetProduct({prod}){
    return(
        <div className="card" >
            <img className="card-img-top" src={prod.image} alt={prod.name}/>
            <div className="card-body">
                <h6 className="card-title">{prod.name}</h6>
                <p className="card-text">{prod.short_description}</p>
                <Link to={`/product/${prod.id}`} className="btn btn-dark">Check Details..</Link>
            </div>
        </div>
    )    
}

const Home = (props)=> {
    const product = props.products.map((prod)=>{
        return(
            <li className="col-sm-6 col-md-3 pt-1 pb-1" key={prod.id}>
                <GetProduct prod={prod}/>
             </li>
        )
    });
    return(
        <div className="home-component">
            <section className="title-wrapper">
                    <h1 className="title-text">Cosmetic World</h1>
            </section>
            <div className="pink-bg text-left">
                <section className="container prod-list">
                    <ul className="row list-unstyled pt-5 pb-5 m-0">
                    {product}
                    </ul>
                </section>
            </div>
        </div>
    )
} 


export default Home;



