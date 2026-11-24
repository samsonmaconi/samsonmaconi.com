import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../Section';
import './ProfileSection.css';

const WAYS_TO_WORK = [
    { icon: 'fa-briefcase', title: 'Full-time', text: 'Frontend and web performance roles on product teams.' },
    { icon: 'fa-file-signature', title: 'Contract', text: 'Fixed-term and contract engagements, from a few weeks to a year.' },
    { icon: 'fa-bolt', title: 'Freelance projects', text: 'Scoped builds, performance audits and UI work.' }
];

export default class ProfileSection extends React.PureComponent {
    constructor(props) {
        super(props);
        this.profile = [...props.profile];
    }

    render() {

        return (
            <Section id="profileSection" className="profile" header="Profile" fluid={true} link="/about" linkToolTip="More about me">
                <div className="row justify-content-left py-md-5">
                    <div className="photo col-12 col-sm-6 col-lg text-center">
                        <img className="rounded-circle img-fluid" src="./img/gallery/img_pf_00.jpg" alt="Illustrated portrait of Samson Maconi looking up at the sky" />
                    </div>
                    <div className="col m-5 text-center m-sm-0 text-sm-left  align-self-center">
                        {
                            this.profile.map((value, key) => {
                                return <p key={key}><span><span className="font-weight-bold">{value[0]}</span>: {value[1]}</span><br /></p>
                            })
                        }
                    </div>
                    <div className="col align-self-center d-none d-lg-block">
                        <div className="ways-to-work">
                            <h3 className="ways-title">Ways to work together</h3>
                            <ul className="list-unstyled mb-0">
                                {
                                    WAYS_TO_WORK.map((way, key) => (
                                        <li key={key} className="way">
                                            <span className={`fas ${way.icon} way-icon`}></span>
                                            <div>
                                                <strong>{way.title}</strong>
                                                <span className="way-text">{way.text}</span>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                            <Link to="/contact" className="way-link">Start a conversation <span className="fas fa-arrow-right"></span></Link>
                        </div>
                    </div>
                </div>
            </Section>
        );
    }
}
