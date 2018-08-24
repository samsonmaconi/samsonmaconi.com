import React, { Component } from 'react';
import './ScrollHandler.css';
import smoothscroll from 'smoothscroll-polyfill';

// kick off the polyfill!
smoothscroll.polyfill();
        
export default class ScrollHandler extends Component {

    constructor(props) {
        super(props);
        this.scrolltotop_btn = React.createRef();
    }

    componentDidMount() {
        window.onscroll = this.scrollFunction.bind(this);
    }

    scrollFunction() {
        // When the user scrolls down 500px from the top of the document, show the button
        if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
            this.scrolltotop_btn.current.style.display = "block";
            this.scrolltotop_btn.current.onclick = () => {
                window.scroll({ top: 0, left: 0, behavior: 'smooth' })
            };
        } else {
            this.scrolltotop_btn.current.style.display = "none";
        }
    }

    render() {

        return (
            <div className="ScrollHandler">
                <i ref={this.scrolltotop_btn} id="scrolltotop" className="navtab"><i className="fas fa-angle-double-up"></i></i>
            </div>
        );
    }
}





