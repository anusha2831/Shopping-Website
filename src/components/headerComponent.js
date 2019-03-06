import React, { Component } from 'react';
import {NavLink,Link} from 'react-router-dom';

class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            isNavOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render(){
        const collapsed = this.state.isNavOpen;
        const classOne = collapsed ? 'collapse navbar-collapse show' : 'collapse navbar-collapse ';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right ' : 'navbar-toggler navbar-toggler-right collapsed';
        return(
         <header className="App-header ">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <Link to="/home" className="navbar-brand">Dazzle</Link>
                <button className={`${classTwo}`} type="button" onClick={this.toggleNav}  data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                

                <div className={`${classOne}`}  >
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item " >
                        <NavLink className="nav-link" to="/home">
                         Products <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/services">Services</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link " to="/findstore">
                        <span className="fa fa-map-marker fa-lg"></span> Find A Store</NavLink>
                    </li>
                    </ul>                    
                </div>
            </nav>            
        </header>
        )
    }
}

export default Header;