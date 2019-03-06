import React from 'react';


function Services(props) {

    function RenderVariants({variants}){
       if(variants !==   null){
            return(
                <ul className="list-unstyled">
                    {variants.map((variant)=>{
                        return (
                            <li key={variant.var_id}>
                                <h6>{variant.name}</h6>
                                <p>{variant.var_desc}</p>
                            </li> 
                        )
                    })}
                </ul>
            )
       }
       else return(
           <div></div>
       )
    }
    const services = props.services.map((service) => {
        return (
            <li key={service.id} className="col-12 list-group-item">
                <h5>{service.title}</h5>     
                <p>{service.description}</p> 
                <RenderVariants variants={service.variants}/>
            </li>
        );
    });

    return(
        <div className="container">
            <h3 className="text-center mt-3 mb-3">Services</h3>
            <ul className="list-unstyled  mb-5 list-group services-list pink-bg">{services}</ul>
        </div>
    )
}

export default Services;