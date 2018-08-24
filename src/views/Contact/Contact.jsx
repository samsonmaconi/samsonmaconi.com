import React from 'react';
import './Contact.css';
import HeaderSub from '../../components/HeaderSub';
import NavHeaderSub from '../../components/NavHeaderSub';
import Section from '../../components/Section';
import GoogleMap from '../../components/GoogleMap';
import ContactForm from '../../components/ContactForm';
import { connect } from 'react-redux';

class Contact extends React.Component {

    componentDidMount() {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }

    render() {
        return (

            <div id="contact" className="Contact animated fadeIn">
                <NavHeaderSub>
                    <HeaderSub title="Send a Raven!" tagline="I'm currently available for freelance work" />
                </NavHeaderSub>
                <Section id="contact_form" className="contact_form">
                    <ContactForm />
                </Section>
                <GoogleMap
                    latitude={this.props.lnglat.latitude}
                    longitude={this.props.lnglat.longitude}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        lnglat: state.secret.location
    }
}

export default connect(mapStateToProps)(Contact); 