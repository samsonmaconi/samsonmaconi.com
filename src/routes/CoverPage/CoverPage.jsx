import React, { Component } from 'react';
import ParticlesBackground from '../../components/Particles'
import { Link } from 'react-router-dom'
import './CoverPage.css';

export default class CoverPage extends Component {

    constructor(props) {
        super(props);
        this.style = {
            logo: {
                height: "20%"
            },
            particles: {
                position: "fixed",
                height: "100%",
                width: "100%",
                backgroundColor: "black"
            }
        };

        this.logo = this.props.logo['dark'];
        this.logoClassName = "logoAni1 animated hinge";
        this.animGroupClassName = "invisible";

    }

    componentDidMount(){
        this.timer1 = setTimeout(() => {
            this.logo = this.props.logo['light'];
            this.logoClassName = "logoAni2a animated bounceInUp ";
            this.animGroupClassName = "logoAni2b animated fadeIn";
            this.forceUpdate();
        }, 5000);
    }

    componentWillUnmount(){
        clearTimeout(this.timer1);
    }

    render() {

        return (
            <ParticlesBackground style={this.style.particles} className="CoverPage">
                <div role="main" className="cover-container">
                    <div className="cover-center align-middle">
                        <img id="logo" src={this.logo} style={this.style.logo} className={this.logoClassName} alt="SM" />
                        <div className={this.animGroupClassName}>
                            <h1 className="h1 d-none d-lg-block">{this.props.appTitle}</h1>
                            <p className="lead">
                                <Link to="/home" className="btn btn-sm btn-dark animated pulse">Enter Site</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </ParticlesBackground>
        );
    }
}
