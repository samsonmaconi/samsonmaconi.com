import React from 'react';
import './Section.css';
import { Link } from 'react-router-dom';

export default class Section extends React.PureComponent{

    constructor(props){
        super(props);
        this.style = {
            backgroundColor: props.backgroundColor,
            backgroundImage: props.backgroundImage,
            backgroundPosition: 'center',
            backgroundAttachment: "fixed",
            backgroundSize: "cover"
        }
    }
    
    const 
    render() {
        return (
            <section id={this.props.id} style={this.style} className={`Section ${this.props.className ? this.props.className : ""}`}>
                {this.props.header ? <h2 className="headingHorizontal text-center d-md-none d-block m-4 mt-5">{this.props.header || ""}</h2> : ''}
                <div>
                    {this.props.header ? <div className="heading text-center d-none d-md-block"><h2 className="section-header mx-sm-5 mr-0">{this.props.header || ""}</h2></div> : ''}
                    <div className={this.props.fluid ? `container-fluid ${this.props.nopadding ? `p-0` : ``}` : "container"}>
                        {this.props.children}
                    </div>
                    {this.props.link ? 
                    <div className="footing text-more align-items-end justify-content-center pr-3  d-none d-md-inline-flex">
                        <h2 className="section-footer"> <span><span className="linkToolTip">{this.props.linkToolTip || ""}</span><Link to={this.props.link} className="more-link far fa-arrow-alt-circle-right animated pulse"></Link></span> </h2>
                    </div> 
                    : ""}
                </div>
                {this.props.link ? 
                    <div className="footing text-more text-right justify-content-center d-md-none d-block">
                        <h2 className="section-footer"> <span><span className="linkToolTip">{this.props.linkToolTip || ""}</span><Link to={this.props.link} className="more-link far fa-arrow-alt-circle-right animated pulse"></Link></span> </h2>
                    </div> 
                : ""}
            </section>
        );
    }
}
