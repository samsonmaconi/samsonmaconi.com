import React from 'react';
import './Accordion.css';

class Accordion extends React.Component{

    render(){
        return(
            <div className="Accordion mx-sm-5">
                <div className="header"></div>
                <div className="content">
                    {this.props.children}
                </div>
                <div className="footer"></div>
            </div>
        )
    }
}

export default Accordion;