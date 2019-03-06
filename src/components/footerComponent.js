import React from 'react';
import { Link } from 'react-router-dom';


function Footer(){
        return(
            <div className="footer text-light bg-dark pt-3">
            <div className="container">
                <div className="row justify-content-center">             
                    <div className="col-5 offset-1 col-sm-3">
                        <h6 className="text-white-50 bg-dark">Links</h6>
                        <ul className="list-unstyled">
                            <li><Link to="/home" className="text-light">Product</Link></li>
                            <li><Link to="/services" className="text-light">Services</Link></li>
                            <li><Link to="/findstore" className="text-light">Find A Store</Link></li>
                            <li><Link to="/" className="text-light">Help</Link></li>
                        </ul>
                    </div>
                    <div className="col-5 col-sm-3">
                        <h6 className="text-black-50">Help & FAQs</h6>
                        <ul className="list-unstyled">
                            <li><Link to="/" className="text-light">Online Ordering</Link></li>
                            <li><Link to="/" className="text-light">Shipping</Link></li>
                            <li><Link to="/" className="text-light">Billing</Link></li>
                            <li><Link to="/" className="text-light">Returns and Exchanges</Link></li>
                            <li><Link to="/" className="text-light">Customer Service</Link></li>
                        </ul>
                    </div>
                    <div className="col-4 col-sm-5">
                        <h6>Our Address</h6>
                        <address>
                          338 San Petra Court<br />
                          Milpitas,California<br />
                          United States<br />
                          <i className="fa fa-phone fa-lg"></i> : +408 455 4746<br />                          
                        </address>
                    </div> 
                </div>
                <div className="row justify-content-end text-muted">             
                    <div className="col-auto">
                        <p><i>©Anusha Charipally and Various Sites</i></p>
                    </div>
                </div>
            </div>
        </div>
        );
    }

export default Footer;