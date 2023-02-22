import React from "react";
import './Testimonials.css';
import QuoteIcon from './quote-mark.svg';
import TestimonialImg1 from './testimonial1.svg';
import TestimonialImg2 from './testimonial2.svg';
import TestimonialImg3 from './testimonial3.svg';

const Testimonials = () => {
    return (
        <div className="container-fluid testimonial-section">
            <div className="testimonial-header">
                <p className="test-headline">REVIEWS</p>
                <h1 className="test-title">See what our users have to say about our budget tracker</h1>
            </div>
            <div className="row testimonial-block review1">
                <div className="col-12 col-md-8 text-content">
                    <img src={QuoteIcon} className='quote' alt='quote mark' />
                    <p className="review">I love the Money Planner! It has made my life so much easier by keeping track of my finances all in one place.</p>
                    <h4 className="client-name">Kate Fleming</h4>
                </div>
                <div className="col-12 col-md-4 image-content">
                    <img src={TestimonialImg1} className='profile-image' alt="Kate Fleming" />
                </div>
            </div>
            <div className="row testimonial-block review2">
                <div className="col-12 col-md-8">
                    <img src={QuoteIcon} className='quote' alt='quote mark' />
                    <p className="review">“Money Planner has helped me to stay on top of my expenses and make smarter financial decisions. Highly recommended!”</p>
                    <h4 className="client-name">Eduardo Rodriguez</h4>
                </div>
                <div className="col-12 col-md-4 image-content">
                    <img src={TestimonialImg2} className='profile-image' alt="Eduardo Rodriguez" />
                </div>
            </div>
            <div className="row testimonial-block review3">
                <div className="col-12 col-md-8">
                    <img src={QuoteIcon} className='quote' alt='quote mark' />
                    <p className="review">“As someone who struggles with budgeting, Money Planner has been a game-changer. It's user-friendly and has helped me to save money each month.”</p>
                    <h4 className="client-name">Jane Smith</h4>
                </div>
                <div className="col-12 col-md-4 image-content">
                    <img src={TestimonialImg3} className='profile-image' alt="Jane Smith" />
                </div>
            </div>
        </div>
    )
}

export default Testimonials;