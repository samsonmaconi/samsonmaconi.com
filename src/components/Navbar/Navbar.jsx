import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default class Navbar extends Component {

    render() {

        return (

            <nav id="navbar" className={`Navbar navbar navbar-expand-sm navbar-dark px-0 py-0 text-center ${this.props.fixed ? 'fixed-top' : '' } ${this.props.className}`} style={{
                backgroundImage : this.props.backgroundImage,
                backgroundColor : this.props.backgroundColor,
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover'
            }}>
                <NavLink to="/home" className="navbar-brand animated bounceInLeft" href="#">
                    <img src={this.props.logo} className="logo m-2 animated tada" alt="logo" />
                    {/* <span className="d-none d-lg-inline themepulse-hover">{this.props.appTitle}</span> */}
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end animated fadeInLeft" id="navbarsExample04">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/home" activeClassName="active" className="nav-link">Home<span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" activeClassName="active" className="nav-link">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/portfolio" activeClassName="active" className="nav-link">Recent Projects</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/credentials" activeClassName="active" className="nav-link">Street Cred</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" activeClassName="active" className="nav-link">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>

        );
    }
}
