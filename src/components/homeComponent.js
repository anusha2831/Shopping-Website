import React from 'react';
import { Link } from 'react-router-dom'


const Home = (props)=> {
    const product = props.products.map((prod)=>{
        return(
            <li className="col-sm-6 col-md-3" key={prod.id}>
                <div className="card" >
                    <img className="card-img-top" src={prod.image} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{prod.name}</h5>
                        <p className="card-text">{prod.short_description}</p>
                        <Link to={`/product/${prod.id}`} className="btn btn-primary">Check Details..</Link>
                    </div>
                </div>
             </li>
        )
    });
    return(
        <div className="home-component">
            <section className="title-wrapper">
                    <h1 className="title-text">Cosmetic World</h1>
            </section>
            <div className="pink-bg">
                <section className="container">
                    <ul className="row pt-5">
                    {product}
                    </ul>
                </section>
            </div>
        </div>
        )
} 


export default Home;



