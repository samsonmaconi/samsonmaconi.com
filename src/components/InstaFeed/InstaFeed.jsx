import React from 'react';
import ReactDom from 'react-dom';
import './InstaFeed.css';
import Instafeed from 'react-instafeed'

export default class InstaFeed extends React.Component {
    constructor(props) {
        super(props);
        this.instaRef = React.createRef();
        this.activeElements = null;
        this.prevElements = null;
    }

    componentDidMount() {
        // console.log(ReactDom.findDOMNode(this.instaRef.current).getElementsByClassName("instafeed__item"));

        this.timer1 = setInterval(this.shuffle.bind(this), 700);
    }

    shuffle() {
        this.prevElements = this.activeElements;
        this.activeElements = this.randInt(11, 4);
        if (this.prevElements)
            this.toggleClass("active", this.prevElements)
        try {
            this.toggleClass("active", this.activeElements)
        }
        catch (e) {
            console.log("Err: " + e.message);
            this.activeElements = null;
        }

    }

    randInt(max, count) {
        let integers = [];
        for (let i = 0; i < count; i++) {
            integers.push(Math.round(Math.random() * max));
        }
        // console.log(integers);
        return integers;
    }

    toggleClass(name, index) {
        for (let i = 0; i < index.length; i++) {
            try{
                ReactDom.findDOMNode(this.instaRef.current).getElementsByClassName("instafeed__item")[index[i]].classList.toggle(name);
            }catch (err){
                console.log("Instagram is not ready. Check internet connection.")
            }
            
        }
    }

    componentWillUnmount() {
        clearTimeout(this.timer1);
    }

    render() {
        const instafeedTarget = 'instafeed'
        return (
            <div id={instafeedTarget} ref={this.instaRef} className="InstaFeed row no-gutters">
                <Instafeed
                    limit='12'
                    ref='instafeed'
                    resolution='standard_resolution'
                    sortBy='most-recent'
                    target={instafeedTarget}
                    template={template()}
                    userId={this.props.userId}
                    clientId={this.props.clientId}
                    accessToken={this.props.accessToken}
                />
            </div >
        )

    }
}

function template() {
    return (
        '<a href="{{link}}" target="_blank" class="instafeed__item col-4 col-md-2">' +
        '<img class="instafeed__item__background" src="{{image}}" />' +
        '<div class="instafeed__item__overlay">' +
        '<div class="instafeed__item__overlay--inner">' +
        // '<p class="instafeed__item__caption">{{model.short_caption}}</p>' +
        // '<p class="instafeed__item__location">{{location}}</p>' +
        '</div>' +
        '</div>' +
        '</a>'
    );
}