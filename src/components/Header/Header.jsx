import React from 'react';
import './Header.css';

export default class Header extends React.Component {

    constructor(props){
        super(props);
        this.style = {
            backgroundImage: props.backgroundImage,
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover'
        };
        this.nextElement = props.nextElement;
    }

    render(){
        return (

            <div id="header" className="Header pt-lg-5 d-flex flex-column align-items-center justify-content-center" style={this.style}>
                <div className="d-flex HeaderTitle title flex-column flex-sm-row align-items-center mt-auto">
                    <div className="d-inline-flex">
                        <h1 className="display-1">SAMSON</h1> 
                    </div>
                    <div className="d-inline-flex">
                        <h1 className="display-1"><span className="x">✕</span></h1>
                    </div>
                    <div className="d-inline-flex">
                        <h1 className="display-1">MACONI</h1>
                    </div>
                </div>
                <div className="tagline d-flex flex-column flex-sm-row align-items-center">
                    <span className="d-none d-md-block">Creative Thinker <span className="x">+</span> Software Engineer <span className="x d-none d-sm-inline"> + </span>Decent human being</span>
                </div>
                <div className="mt-auto">
                    <a id="next_btn" className="next_btn animated pulse" onClick={() => {document.querySelector('#profileSection').scrollIntoView({ behavior: 'smooth' })}}><span className="fas fa-angle-down"></span></a>
                </div>
                {/* filler for next_btn nav */}
                <div id="nextFiller"></div>
            </div>
        );
    }
    
}
