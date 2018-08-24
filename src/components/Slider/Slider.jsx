import React from 'react';
import Flickity from 'react-flickity-component';
import './Slider.css';

export default function Slider(props) {

    const flickityOptions = {
        draggable: props.draggable,
        pageDots: props.pageDots,
        wrapAround: true,
        initialIndex: 1,
        autoPlay: props.autoPlay||7000,
        prevNextButtons: !props.noPrevNextButtons,
        // setGallerySize: false,
        cellSelector: '.carousel-cell',
        arrowShape: { 
            x0: 35,
            x1: 100, y1: 50,
            x2: 10, y2: 5,
            x3: 55
          },
        // prevNextButtons: false
    };
    return (
        <Flickity id={props.id} options={flickityOptions} className={`Slider carousel ${props.className ? props.className : ""}`}>
            {
                React.Children.map(props.children, (child) => {
                    return (
                        <div className="carousel-cell">
                            {child}
                        </div>
                    )
                })
            }
        </Flickity>
    );
}
