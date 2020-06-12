import React from 'react';
import HtmlParser from 'react-html-parser';
import './Credentials.css';
import HeaderSub from '../../components/HeaderSub';
import NavHeaderSub from '../../components/NavHeaderSub';
import Section from '../../components/Section';
import Accordion from '../../components/Accordion';
import ContactCall from '../../components/ContactCall';
import { connect } from 'react-redux';

class Credentials extends React.Component {

    constructor(props) {
        super(props);
        this.summary = this.props.summary;
        this.cv = this.props.cv;
        this.elementToggle= {showWorkStory: false, showToggleRundown: false}
    }


    componentDidMount() {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }

    renderCV(section, key) {
        switch (section.toLowerCase()) {
            case 'technology':
                return (this.renderTechnology(key, section));
            case 'education':
                return (this.renderEdu(key, section));
            case 'certification':
                return (this.renderEdu(key, section));
            case 'work experience':
                return (this.renderExperience(key, section));
            case 'language':
                return (this.renderLanguage(key, section));
            default:
        }
    }

    renderTechnology(key, section) {
        return (
            <div id={`cv_section${key}`} className="row collapse justify-content-end" data-parent="#cv">
                {
                    Object.keys(this.cv[section]).map((item, key) => {
                        return (
                            <div key={key} className="col-12 col-sm-6 col-md-4 p-3">
                                <h5 className="text1 d-none d-sm-block">{item}</h5>
                                <ul className="text3 d-none d-sm-block">
                                    {
                                        this.cv[section][item].map((techitem, key) => {
                                            return <li key={key}>{techitem}</li>
                                        })
                                    }
                                </ul>
                                <h5 className="text1 d-sm-none">{item}</h5>
                                <p className="text3 d-sm-none" key={key}>{this.cv[section][item].join(", ")}</p>
                            </div>
                        );
                    })
                }
            </div>
        );
    }

    renderEdu(key, section) {
        return (
            <div id={`cv_section${key}`} className="row collapse justify-content-end" data-parent="#cv">
                {
                    this.cv[section].map((item, key) => {
                        return (
                            <div key={key} className="col-12 col-md-8 p-3">
                                <h5 className="text1">{item[0]}</h5>
                                <p>
                                    <span className="text3">{item[1]}</span>
                                    <br className="d-inline d-sm-none" />
                                    <span className="text2 d-none d-sm-inline">, </span>
                                    <span className="text3">{item[2]}</span>
                                </p>
                                {section === 'Certification' ? '' :
                                    <p>
                                        <span className="text3"><i className="fas fa-map-marker-alt"></i> {item[3]}</span>
                                    </p>}
                            </div>

                        );
                    })
                }
            </div>
        );
    }

    renderExperience(key, section) {
        return (
            <div id={`cv_section${key}`} className="row collapse justify-content-end" data-parent="#cv">
                {
                    this.cv[section].map((item, key) => {
                        return (
                            <div key={key} className="col-12 col-md-8 p-3">
                                <h5 className="text1">{item[0]}</h5>
                                <span className="text2">{item[1]}</span>
                                <br className="d-inline d-sm-none" />
                                <span className="text2 d-none d-sm-inline">, </span>
                                <span className="text3">{item[2]}</span>
                                <br/>
                                {this.elementToggle.showWorkStory &&
                                    <p>
                                        <span className="text3">{item[3]}</span>
                                    </p>
                                }
                                <span className="text3"><i className="fas fa-map-marker-alt"></i> {item[4]}</span>
                            </div>

                        );
                    })
                }
            </div>
        );
    }

    renderLanguage(key, section) {
        return (
            <div id={`cv_section${key}`} className="row collapse justify-content-end" data-parent="#cv">
                {
                    this.cv[section].map((item, key) => {
                        return (
                            <div key={key} className="col-12 col-md-8 p-3">
                                <h5 className="text1">{item[0]}</h5>
                                <p>
                                    <span className="text3">{item[1]}</span>
                                </p>
                            </div>

                        );
                    })
                }
            </div>
        );
    }


    render() {
        return (
            <div id="credentials" className="Credentials animated fadeIn">
     
                <NavHeaderSub>
                    <HeaderSub title="Dig a little deeper" tagline="My résumé for your perusal" buttonLink={["Download Résumé", "href", "https://s3.amazonaws.com/samsonmaconi.com/resume/Samson+Maconi+-+Re%CC%81sume%CC%81.pdf"]} />
                </NavHeaderSub>

                <Section id="summary" className="summary d-none d-sm-block">
                    <div id="summary_content" className="summary_content py-5 collapse">
                        <hr />
                        {this.summary.map((item, key) => {
                            if (key % 2)
                                return (
                                    <div key={key} className="row justify-content-center rounded my-3">
                                        <div className="col-2 align-self-start">
                                            <img alt={`${item[2]} logo`} className="" src={item[1]} />
                                        </div>
                                        <div className="col-10 align-self-start text-justify">
                                            {HtmlParser(item[0])}
                                        </div>
                                    </div>
                                )
                            else
                                return (
                                    <div key={key} className="row justify-content-center rounded my-3">
                                        <div className="col-10 align-self-start text-justify">
                                            {HtmlParser(item[0])}
                                        </div>
                                        <div className="col-2 align-self-start">
                                            <img alt={`${item[2]} logo`} className="" src={item[1]} />
                                        </div>
                                    </div>
                                )
                        })}
                        <hr />
                    </div>

                    {this.elementToggle.showToggleRundown && <a id="toggleSummary" className="toggleSummary navtab" data-toggle="collapse" href="#summary_content">Toggle Rundown</a>}
                </Section>

                <Section id="cv" className="cv" fluid={true}>
                    <Accordion>
                        {
                            Object.keys(this.cv).map((section, key) => {
                                return (
                                    <div key={key}>
                                        <a data-toggle="collapse" href={`#cv_section${key}`} className="collapsed">{section}</a>
                                        {
                                            this.renderCV(section, key)
                                        }
                                    </div>
                                )
                            })
                        }
                    </Accordion>
                </Section>

                <ContactCall label="Let's discuss that" tagline="Find anything <span>interesting?</span>" />

            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        summary: state.credentials.summary,
        cv: state.credentials.cv
    }
}

export default connect(mapStateToProps)(Credentials); 