import React from 'react';
import Section from '../Section';
import Slider from '../Slider';
import SVGIcon from '../SVGIcons';
import './SkillsSection.css';

export default class SkillsSection extends React.Component {
    
    render() {

        return (
            <Section id="credentials" className="credentials SkillsSection" header="skillSet" fluid={true} nopadding={true} link="/credentials" linkToolTip="Dig a little deeper...">
                <div className="row no-gutters">
                    <div className="col align-self-center">
                        <Slider pageDots={true} autoPlay={7000} draggable={true}>
                            {
                                Object.keys(this.props.skillSet.AppDev).map((category, key) => {
                                    return <div key={key}>
                                        <h3 className="font-weight-bold text-center">{category}</h3>

                                        <div className="row justify-content-center mt-5">
                                            {
                                                this.props.skillSet.AppDev[category][0].slice(0, 3).map((skill, key) => {
                                                    return <div key={key} className={`skill skillLevel-${this.props.skillSet.AppDev[category][1][key]} col-4 align-self-center`} >
                                                        <SVGIcon icon={skill} />
                                                    </div>
                                                })
                                            }
                                        </div>

                                        <div className="row justify-content-center mt-5">
                                            {
                                                this.props.skillSet.AppDev[category][0].slice(3).map((skill, key) => {
                                                    return <div key={key} className={`skill skillLevel-${this.props.skillSet.AppDev[category][1][key + 3]} col-2 col-md-2 col-lg-1 align-self-center text-center px-2 px-md-3`} >
                                                        <SVGIcon icon={skill} />
                                                    </div>
                                                })
                                            }
                                        </div>

                                    </div>
                                })
                            }
                        </Slider>
                        <div id="Legend">
                            <span className="legendTitle">Proficiency Legend</span>
                            <ul className="legend">
                                <li className="legendItem skillLevel-1">Expert</li>
                                <li className="legendItem skillLevel-2">Advanced</li>
                                <li className="legendItem skillLevel-3">Intermidiate</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </Section>
        );
    }
}