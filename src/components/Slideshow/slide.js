import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import slide1 from '../Slideimage/img1.jpg';
import slide2 from '../Slideimage/img2.jpg';
import slide3 from '../Slideimage/img3.jpg';
import slide4 from '../Slideimage/img4.jpg';
import slide5 from '../Slideimage/img5.jpg';
import slide6 from '../Slideimage/img6.jpg';
import slide7 from '../Slideimage/img7.jpg';
import slide8 from '../Slideimage/img8.jpg';


function Slideshow() {

    const slides=[
        {
           slide:slide1 
        },
        {
            slide:slide2
        },
        {
            slide:slide3
        },
        {
            slide:slide4
        },
        {
            slide:slide5
        },
        {
            slide:slide6
        },
        {
            slide:slide7
        },
        {
            slide:slide8
        }
    ]

    return(
        <div className="slider-container">
        <Slide>
            {slides.map((slides, index) => (
                <div className="each-slide" key={index}>
                    <img src={slides.slide} width={1366} />
                </div>
            ))}
            </Slide>
    </div> 
    );
}

export default Slideshow;
