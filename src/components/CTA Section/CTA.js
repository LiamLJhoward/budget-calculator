import React from "react";
import "./CTA.css";
import Calculator from "./calculator.webp";
import FeatResp from "./feat-responsive.svg";
import FeatEasy from "./feat-easy.svg";
import FeatChart from "./feat-chart.svg";

const CTA = () => {
    return (
        <div className="container-fluid cta">
            <div className="row">
                <div className="col-sm-12 col-lg-6 order-md-1 order-2 cta-content-container">
                    <h1 className="cta-title">
                        Plan for a better future with our budget calculator
                    </h1>

                    <div className="block-features">
                        <div className="feature">
                            <img src={FeatResp} alt="responsive icon" className="feature-icon" />
                            <p className="feature-text">RESPONSIVE</p>
                        </div>
                        <div className="feature">
                            <img src={FeatEasy} alt="easy-to-use icon" className="feature-icon" />
                            <p className="feature-text">EASY TO USE</p>
                        </div>
                        <div className="feature">
                            <img src={FeatChart} alt="chart icon" className="feature-icon" />
                            <p className="feature-text">CUSTOM CHART</p>
                        </div>
                    </div>
                    <p className="cta-subtitle">
                        This is the perfect tool for creating a solid financial plan. You can easily track your income, expenses, and savings.
                    </p>
                    <button className="cta-button">Get Started</button>
                </div>
                <div className="col-sm-12 col-lg-6 order-md-2 order-1 cta-image-container">
                    <img src={Calculator} className="img-fluid cta-image" alt="calculator" />
                </div>
            </div>
        </div>

    );
};

export default CTA;