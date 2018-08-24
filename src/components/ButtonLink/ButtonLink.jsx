import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Tilt from 'react-tilt';
import './ButtonLink.css';

export default class ButtonLink extends Component {

    constructor(props) {
        super(props);
        this.style = {
            backgroundImage: this.props.backgroundImage,
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',

        }
        this.tiltOptions = {
            max: 30

        }

    }
    render() {

        if (this.props.to)
            return (
                <div className="tiltButton ButtonLink">
                    <Tilt className="Tilt" options={this.tiltOptions} style={{ transformStyle: "preserve-3d" }}>
                        <Link {...this.props} style={this.style} to={this.props.to} className={`ButtonLink btn btn-outline-light ${this.props.className}`}>
                            <div className="Tilt-inner">
                                {this.props.label}
                            </div>
                        </Link>
                    </Tilt>
                </div>
            )
        else if (this.props.onClick)
            return (
                <div className="tiltButton ButtonLink">
                    <Tilt className="Tilt" options={this.tiltOptions} style={{ transformStyle: "preserve-3d" }}>
                        <button {...this.props} style={this.style} className={`ButtonLink btn btn-outline-light ${this.props.className}`}>
                            <div className="Tilt-inner">
                                {this.props.label}
                            </div>
                        </button>
                    </Tilt>
                </div>

            )
        else
            return (
                <div className="tiltButton ButtonLink">
                    <Tilt className="Tilt" options={this.tiltOptions} style={{ transformStyle: "preserve-3d" }}>
                        <a {...this.props} style={this.style} className={`ButtonLink btn btn-outline-light ${this.props.className}`}>
                            <div className="Tilt-inner">
                                {this.props.label}
                            </div>
                        </a>
                    </Tilt>
                </div>

            )
    }
}

ButtonLink.propTypes = {
    label: PropTypes.string.isRequired
};

ButtonLink.defaultProps = {
    className: 'dark' 
  }