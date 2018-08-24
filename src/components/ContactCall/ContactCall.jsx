import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import Section from '../../components/Section';
import ButtonLink from '../../components/ButtonLink';
import './ContactCall.css';

export default class ContactCall extends React.PureComponent {
    
    render() {
        return (
            <Section id="ContactCall" className="ContactCall" fluid={true} backgroundImage="url('./img/img_bg_00.jpg')" >
                <div className="row">
                    <div className="col text-center align-self-center py-5">
                        <h2 className="mb-4">{ ReactHtmlParser(this.props.tagline)}</h2>
                        <ButtonLink to="/contact" label={this.props.label} className='light'/>
                    </div>
                </div>
            </Section>
        );
    }
}