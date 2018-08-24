import React from 'react';
import './Home.css';
import Header from '../../components/Header';
import ProfileSection from '../../components/ProfileSection';
import QuotesSection from '../../components/QuotesSection';
import SkillsSection from '../../components/SkillsSection';
import ContactCall from '../../components/ContactCall';
import { connect } from 'react-redux';
import smoothscroll from 'smoothscroll-polyfill';

// kick off the polyfill!
smoothscroll.polyfill();

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.nextElement = React.createRef();

        this.profile = this.props.home.profile;
        this.quotes = this.props.home.quotes;
        this.skillSet = {...this.props.home.skillSet};

        this.profile[6][1] = this.props.currentLocation;
    }

    componentDidMount() {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }

    render() {
        return (
            <div id="home" className="Home animated fadeIn">
                <Header nextElement={this.nextElement} backgroundImage="url('./img/img_hd_00.jpg')" />
                <ProfileSection forwardedRef={this.nextElement} profile={this.profile} />
                <QuotesSection quotes={this.quotes} backgroundImage="url('./img/img_bg_01.jpg')" />
                <SkillsSection skillSet={this.skillSet} />
                <ContactCall label="Contact Me" tagline="Let's build <span>something beautiful</span> together" />
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        home: state.home,
        currentLocation: state.secret.location.text
    }
}

export default connect(mapStateToProps)(Home); 