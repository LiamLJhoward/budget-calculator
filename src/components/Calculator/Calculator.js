import React from "react";
import './Calculator.css';
import Payments from "./Payments/Payments";
import Balance from "./Balance/Balance";

const Calculator = () => {
    return (
        <div className="container-fluid">
            <div className="headline">
                <p>Budget Calculator</p>
                <h2>Get a handle on your finances with our easy-to-use budget calculator.</h2>
            </div>
            <div className="row calc-content">
                <div className="col-sm-12 col-lg-6">
                    <Payments />
                </div>
                <div className="col-sm-12 col-lg-6">
                    <Balance />
                </div>
            </div>
        </div>
    )
}

export default Calculator;