import React from 'react';
import './Gallery.css';

export default class Gallery extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div id="gallery" className="Gallery container-fluid animated fadeIn">
                <div className="row no-gutters">
                    <div className="col">
                        <h1>Let me take a Selfie...</h1>
                    </div>
                </div>
            </div>
        );
    }
}