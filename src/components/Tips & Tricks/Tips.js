import React from "react";
import './Tips.css';

const Tips = () => {
    return (
        <div className="container-fluid" id="tips">
            <div className="tips-header">
                <p className="tips-headline">TIPS & TRICKS</p>
                <h1 className="tips-title">Maximize your budget and minimize your stress with these expert tips and tricks.</h1>
            </div>
            <div className="row">
                <div className="card">
                    <div className="card-container">
                        <h3>Set realistic goals</h3>
                        <p>Start by setting achievable goals for your budget. Don't set yourself up for failure by trying to cut too much too soon.</p>
                    </div>
                    <div className="card-container">
                        <h3>Keep track of your spending</h3>
                        <p>It's important to keep track of your spending to ensure that you stay within your budget. Use your budget planner to track your spending in each category, and adjust your budget as necessary.</p>
                    </div>
                    <div className="card-container">
                        <h3>Look for ways to save money</h3>
                        <p>Identify areas where you can reduce your spending, such as eating out less or reducing your energy usage at home.</p>
                    </div>
                    <div className="card-container">
                        <h3>Use cash</h3>
                        <p>Consider using cash instead of credit or debit cards to help you stick to your budget. When you can see the money leaving your wallet, you may be more likely to think twice before making a purchase.</p>
                    </div>
                    <div className="card-container">
                        <h3>Don't forget to plan for unexpected expenses</h3>
                        <p>It's important to have a contingency plan for unexpected expenses, such as car repairs or medical bills. Consider setting aside a portion of your budget for unexpected costs.</p>
                    </div>
                    <div className="card-container">
                        <h3>Stay motivated</h3>
                        <p>Sticking to a budget can be challenging, but it's important to stay motivated. Celebrate your successes and don't beat yourself up if you slip up occasionally. Remember, it's all about progress, not perfection.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tips;