import React from "react";
import HeroImg from './heroimg.webp';
import './Hero.css';
import CTA from "../CTA Section/CTA";
import Testimonials from "../Testimonials/Testimonials";


const Hero = () => {
    return (
        <div className="container-fluid hero">
            <div className="row">
                <div className="col-md-6 col-sm-12 hero-img">
                    <img src={HeroImg} className="img-fluid d-none d-md-block" alt='hero banner' />
                </div>
                <div className="col-md-6 col-sm-12 hero-content">
                    <h1 className="hero-title">Take control of your finances</h1>
                    <p className="hero-subtitle">The easiest way to stay on top of your finances and reach your financial goals</p>
                    <button className="hero-button">Get Started</button>
                </div>
            </div>
        
        </div>
    )
}

export default Hero;