import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Header extends Component{

    render(){
        return(
         <header className="App-header ">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="#">Dazzle</a>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item " >
                        <NavLink className="nav-link" to="/home">Products <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/gifts">Gifts</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link " to="/findstore">Find A Store</NavLink>
                    </li>
                    </ul>                    
                </div>
            </nav>            
        </header>
        )
    }
}

export default Header;