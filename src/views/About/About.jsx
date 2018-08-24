import React from 'react';
import './About.css';
import HeaderSub from '../../components/HeaderSub';
import NavHeaderSub from '../../components/NavHeaderSub';
import Section from '../../components/Section';
import InstaFeed from '../../components/InstaFeed';
import ButtonLink from '../../components/ButtonLink';
import Slider from '../../components/Slider';
import ContactCall from '../../components/ContactCall';
import { connect } from 'react-redux';

class About extends React.Component {

    constructor(props) {
        super(props);
        this.favorites = this.props.favorites;
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        let gallery_tags = [];
        for (let index = 0; index <= 7; index++) {
            gallery_tags.push(
                <img key={index} className="rounded-circle img-fluid" src={`./img/gallery/img_gl_0${index}.jpg`} alt="My Slideshow" />
            )

        }
        let illrather_tags = [];
        for (let index = 0; index <= 2; index++) {
            illrather_tags.push(
                <img key={index} className="rounded-circle img-fluid" src={`./img/gallery/img_ir_0${index}.jpg`} alt="i'll rather images" />
            )

        }
        return (

            <div id="about" className="About animated fadeIn">
            <NavHeaderSub>
                <HeaderSub backgroundImage="" title="Hi! I am Sam" tagline="The devil's in the details" />
            </NavHeaderSub>

                <Section id="Random" fluid={1} className="Random py-5" backgroundColor="light-gray">
                    <div className="row justify-content-center pt-5">
                        <div className="col-12 col-md-4 photoslider">
                            <Slider pageDots={false} autoPlay={14000} draggable={true}>
                                {
                                    gallery_tags
                                }
                            </Slider>
                        </div>
                        <div className="col-12 col-md-7  align-self-center text">
                            <div className="row">
                                <div className="col">
                                    <h2 className="text-center p-3 themecolor1">A few fun facts</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p className="text-center">I'm a huge fan of Game of Thrones, not a huge fan of coffee, I prefer unsweetened yoghurt to ice-cream, I don't quite understand the love of pasta, I went scuba diving once, I don't know how to ride a bicycle... yet, and I enjoyed snorkelling in the Red Sea only after a first panic riddled attempt.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
                <Section id="Favorites" fluid={true} className="Favorites py-5" backgroundImage="url('./img/img_bg_02.jpg')">
                    <div className="row justify-content-center mt-5">
                        <div className="col-12 col-md-7 align-self-center text">
                            <div className="row">
                                <div className="col">
                                    <h2 className="text-center p-3 white"><span className="fas fa-star themecolor4"></span> Faves <span className="fas fa-star themecolor4"></span></h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col white">
                                    <p className="text-left">Here are a few of my favorite things</p>
                                    <ul className="ml-3">
                                        {Object.keys(this.favorites).map((category, key) => {
                                            return (
                                                <li key={key}>
                                                    <p><span className="category text-bold">{`Favorite ${category}: `}</span><span className="fav themecolor4">{`${this.favorites[category][0]}`}</span><span>{` ${this.favorites[category][1]}`}</span></p>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <Slider pageDots={true} autoPlay={7000} draggable={true} noPrevNextButtons>
                                {
                                    illrather_tags
                                }
                            </Slider>
                        </div>
                    </div>
                </Section>

                <Section id="Instagram" fluid={false} className="py-5">
                    <div className="row pt-5">
                        <div className="col">
                            <h2 className="text-center p-3 themecolor1">Here's My Instagram Feed</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <InstaFeed
                                userId={this.props.secret.userId}
                                clientId={this.props.secret.clientId}
                                accessToken={this.props.secret.accessToken}
                            />
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-auto p-5"><ButtonLink href="https://www.instagram.com/samsonmaconi/" label="Follow Me on Instagram" className="dark" />
                        </div>
                    </div>
                </Section>

                <ContactCall label="Say Hello" tagline="At this juncture, the polite thing to do is to <span>buy me a drink</span>" />

            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        favorites: state.about.favorites,
        secret: state.secret.instagram
    }
}

export default connect(mapStateToProps)(About); 