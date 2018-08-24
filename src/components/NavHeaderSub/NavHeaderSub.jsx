import React from 'react';
import './NavHeaderSub.css';
import Navbar from '../Navbar';

export default class NavHeaderSub extends React.Component {

    constructor(props) {
        super(props);
        this.logo = "./img/img_logo_00.png";
        this.appTitle= "Samson Maconi";
        this.style = {
            backgroundImage: "url('./img/img_bg_00.jpg')",
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover'
        };
    }

    render() {
        return (

            <div id="NavHeaderSub" className="NavHeaderSub flex-column" style={this.style}>
                <Navbar logo={this.logo} appTitle={this.appTitle} theme='light' fixed={true} backgroundColor='none'/>
                {this.props.children}
            </div>
        );
    }

}
