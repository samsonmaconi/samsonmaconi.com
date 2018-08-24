import React from 'react';
import './ProfileGrid.css';

export default class ProfileGrid extends React.Component {

    constructor(props) {
        super(props);
        this.hoverHandler = this.hoverHandler.bind(this);
        //These are the 7 toggle groups
        this.state = {
            "template": [1, 2],  //human-0 love-1 creative-2 
            'percent': [0, 1], //0-1
            'hire': [0, 1], //0-1
            'human': [0, 1], //0-1
            'creative': [1, 1], //0-1
            'love0': [1, 2], //0-2
            'love1': [0, 1], //0-1
            'love2': [0, 1] //0-1
        }

    }

    hoverHandler(e) {
        let group = e.target.getAttribute('togglegroup');
        let _state = Object.assign({}, this.state);
        _state[group][0] = _state[group][0] === _state[group][1] ? 0 : ++_state[group][0];
        this.setState(_state);
    }

    render() {

        return (
            <div id="profile-grid" className="profile-grid container-fluid">
                <div className="row row0 justify-content-center">
                    <div className={`col-9 ${this.state.template[0] === 0 ? "" : "d-none"} p-0`}><img alt='' className={`img-fluid animated slideInLeft`} onMouseEnter={this.hoverHandler} togglegroup= "human" src={`./img/profilegrid/00_1_${this.state.human[0]}.png`} /></div>
                    <div className={`col-${this.state.hire[0] === 0 ? 6 : 9} ${this.state.template[0] !== 0 ? "" : "d-none"} p-0`}><img alt='' className={`img-fluid animated slideInLeft`} onMouseEnter={this.hoverHandler} togglegroup= "hire" src={`./img/profilegrid/00_0_${this.state.hire[0]}.png`} /></div>
                    <div className="col-3 p-0"><img alt='' className="img-fluid animated slideInUp" onMouseEnter={this.hoverHandler} togglegroup= "percent" src={`./img/profilegrid/03_1x1_${this.state.percent[0]}.png`} /></div>
                </div>
                <div className="row row1">
                    <div className={`col-${this.state.template[0] === 1 ? 6 : 12} p-0`}><img alt='' className="img-fluid animated fadeIn" onMouseEnter={this.hoverHandler} togglegroup={`${this.state.template[0] === 0 && this.state.human[0] !== this.state.human[1] ? "human" : "template"}`} src={`./img/profilegrid/10_${this.state.template[0]}_${this.state.template[0] === 0 ? this.state.human[0] : 0}.png`} /></div>
                    <div className={`col-${this.state.template[0] === 1 ? 6 : " d-none"} p-0`}><img alt='' className="img-fluid animated bounce" onMouseEnter={this.hoverHandler} togglegroup= "love0" src={`./img/profilegrid/12_1x2_${this.state.love0[0]}.png`} /></div>
                </div>
                <div className={`row row2 ${this.state.template[0] !== 1 ? " d-none" : ""}`}>
                    <div className="col-6 p-0"><img alt='' className="img-fluid animated flipInX" onMouseEnter={this.hoverHandler} togglegroup= "love1" src={`./img/profilegrid/20_${this.state.love1[0]}.png`} /></div>
                    <div className="col-6 p-0"><img alt='' className="img-fluid animated fadeIn" onMouseEnter={this.hoverHandler} togglegroup= "love2" src={`./img/profilegrid/22_2x2_${this.state.love2[0]}.png`} /></div>
                </div>
                <div className="row row3 justify-content-end">
                    <div className="col-9 p-0"><img alt='' className={`img-fluid animated slideInLeft ${this.state.template[0] === 0 ? "" : " d-none"}`} onMouseEnter={this.hoverHandler} togglegroup= "template" src={`./img/profilegrid/31_1x3_0.png`} /></div>
                    <div className={`col-${this.state.template[0] === 2 ? 3 : " d-none"} p-0`}><img alt='' className="img-fluid animated pulse" onMouseEnter={this.hoverHandler} togglegroup= "creative" src={`./img/profilegrid/33_1x1_${this.state.creative[0]}.png`} /></div>
                </div>
            </div>

        );
    }
}

//Inspired by DEIDRE "DEDA" BAIN developed Designed by Samson Maconi www.samsonmaconi.com