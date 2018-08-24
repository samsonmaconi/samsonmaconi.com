import React from 'react';
import './PageNotFound.css';
import ParticlesBackground from '../../components/Particles';

export default class PageNotFound extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="pageNotFound" className="PageNotFound container-fluid animated fadeIn p-0 m-0">
                <ParticlesBackground>
                    <div className="row">
                        <div className="col col-12 align-items-center">
                            <h1>Error 404: Page Not Found!</h1>
                        </div>
                    </div>
                </ParticlesBackground>
            </div>
        );
    }
}