import React from "react";
import './Testimonials.css';
import QuoteIcon from './quote-mark.svg';
import TestimonialImg1 from './testimonial1.svg';
import TestimonialImg2 from './testimonial2.svg';
import TestimonialImg3 from './testimonial3.svg';

const Testimonials = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="testimonials-header">
                    <p className="testimonials-heading">TESTIMONIALS</p>
                    <h1 className="testimonials-subheading">See what our users have to say about our money planner</h1>
                </div>
                <div className="testimonials-grid">
                    <div className="testimonial-card testimonial-card-left">
                        <div className="row testimonial-card-content">
                            <div className="col testimonial-card-text">
                                <img src={QuoteIcon} className='quote' alt="quote mark" />
                                <p className="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet ultrices turpis ac vulputate. Cras ac suscipit augue.</p>
                                <h4 className="card-subtitle">Kate Fleming</h4>
                            </div>
                            <div className="col testimonial-card-image">
                                <img src={TestimonialImg1} className='card-image' alt="client profile" />
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-card testimonial-card-center">
                        <div className="row testimonial-card-content">
                            <div className="col testimonial-card-text">
                                <img src={QuoteIcon} className='quote' alt="quote mark" />
                                <p className="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet ultrices turpis ac vulputate. Cras ac suscipit augue.</p>
                                <h4 className="card-subtitle">Eduardo Rodriguez</h4>
                            </div>
                            <div className="col testimonial-card-image">
                                <img src={TestimonialImg2} className='card-image' alt="client profile" />
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-card testimonial-card-right">
                        <div className="row testimonial-card-content">
                            <div className="col testimonial-card-text">
                                <img src={QuoteIcon} className='quote' alt="quote mark" />
                                <p className="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet ultrices turpis ac vulputate. Cras ac suscipit augue.</p>
                                <h4 className="card-subtitle">Stacy Ross</h4>
                            </div>
                            <div className="col testimonial-card-image">
                                <img src={TestimonialImg3} className='card-image' alt="client profile" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Testimonials;