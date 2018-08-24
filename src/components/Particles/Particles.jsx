import React, { Component } from 'react';

export default class Particles extends Component {

    constructor(props) {
        super(props);

        this.style = {
                position: "relative",
                height: "100%",
                width: "100%",
                backgroundColor: "#930717"
            };

        /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
        // particlesJS.load('particles-js', './particles.json', function () {
        //     console.log('callback - particles.js config loaded');
        // });
    }
    render() {

        return (
                <div id="particles-js" className={this.props.className || "Particles"} style={this.props.style || this.style}>
                    {this.props.children}
                </div>
        );
    }
}
