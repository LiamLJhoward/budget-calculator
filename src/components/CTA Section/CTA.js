import React from "react";
import './CTA.css';
import Calculator from './calculator.webp';
import FeatResp from './feat-responsive.svg';
import FeatEasy from './feat-easy.svg';
import FeatChart from './feat-chart.svg';


const CTA = () => {
    return (
        <div className="container-fluid cta">
            <div className="row">
                <div className="col-md-6 col-sm-12 order-md-1 order-2 cta-content">
                    <h1 className="hero-title">Plan for a better future with our budget calculator</h1>
                    <p className="hero-subtitle">This is the perfect tool for creating a solid financial plan. You can easily track your income, expenses, and savings.</p>
                    <div className="container">
                        <div className="features">
                            <div className="feat1">
                                <img src={FeatResp} alt='responsive icon' className="feat-icon" />
                            </div>
                            <div className="feat2">
                                <img src={FeatEasy} alt='easy-to-use icon' className="feat-icon" />
                            </div>
                            <div className="feat3">
                                <img src={FeatChart} alt='chart icon' className="feat-icon" />
                            </div>
                        </div>
                    </div>
                    <button className="hero-button">Get Started</button>
                </div>
                <div className="col-md-6 col-sm-12 order-md-2 order-1 cta-image">
                    <img src={Calculator} className='img-fluid' alt='calculator' />
                </div>
            </div>
        </div>
    )
}

export default CTA;