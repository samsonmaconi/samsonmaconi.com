import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './Site.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ScrollHandler from '../../components/ScrollHandler';
import { Home, About, Credentials, Contact, Portfolio } from '../../views';
import ReactGA from 'react-ga'; // Google Analytics

export default class Site extends Component {

    componentDidMount() {
        // setTimeout(function () {
        //     speechSynthesis.cancel();
        //     let utterance = new SpeechSynthesisUtterance("Hello, welcome to Samson Maconi's website! Have a look around.");
        //     speechSynthesis.speak(utterance);
        // }, 2000);
    }

    renderNavbar(isFixed) {
        return (
            <Navbar
                logo={this.props.logo[arguments[1]]}
                appTitle={this.props.appTitle}
                theme={arguments[1]}
                fixed={arguments[0]}
                className="bg-black"
            />
        );
    }

    // Google Analytics
    initializeReactGA(page) {
        ReactGA.initialize('UA-140135350-1');
        ReactGA.pageview(page);
    }

    render() {

        let { match, location } = this.props.routerData;
        this.initializeReactGA(location.pathname); // Google Analytics

        return (
            <div className="Site">
                <ScrollHandler />
                <Route path={`${match.path}home`} exact render={this.renderNavbar.bind(this, true, 'dark')} />
                {/* <Main {...this.props.routerData} /> */}
                <Route path={`${match.path}home`} exact component={Home}/>
                <Route path={`${match.path}about`} exact component={About} />
                <Route path={`${match.path}portfolio`} exact component={Portfolio} />
                <Route path={`${match.path}credentials`} exact component={Credentials} />
                <Route path={`${match.path}contact`} exact component={Contact} />
                <Footer />
            </div>
        );
    }
}
