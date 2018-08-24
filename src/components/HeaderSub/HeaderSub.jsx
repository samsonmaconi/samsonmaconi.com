import React from 'react';
import './HeaderSub.css';
import ButtonLink from '../../components/ButtonLink';

export default class HeaderSub extends React.Component {

    constructor(props) {
        super(props);
        this.style = {
            backgroundImage: props.backgroundImage,
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover'
        };
    }

    render() {
        return (

            <div id="HeaderSub" className="HeaderSub d-flex align-items-center justify-content-center flex-column p-lg-5" style={this.style}>
                <div className="d-flex flex-column align-items-center justify-content-center my-auto">
                    <div className="d-flex">
                        <div className="d-flex">
                            <h1 className="display-1 HeaderTitle title text-center">{this.props.title}</h1>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="tagline d-flex text-center">
                            <span>{this.props.tagline}</span>
                        </div>
                    </div>
                </div>
                {
                    this.props.buttonLink &&
                        <div className="d-flex flex-column align-items-center justify-content-center py-3">
                            <ButtonLink label={this.props.buttonLink[0]} {...(this.props.buttonLink[1]==="href" ? {href: this.props.buttonLink[2]} : {})} className="download" />
                        </div>
                }
            </div>
        );
    }

}
