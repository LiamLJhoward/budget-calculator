import React, { useState } from "react";
import './input.css'


const Inpute = () => {
  const [source, setSource] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [income, setIncome] = useState(0)
  const [expense, setSpending] = useState(0)


  const handleSubmitExpenses = (e) => {
    e.preventDefault();
    const info = { source, amount, date };
    setBalance(balance - parseInt(info.amount));
    setSpending(expense + parseInt(info.amount))
    setTransactions(transactions.concat(info));
    console.log(info);
  };

  const handleSubmitIncome = (e) => {
    e.preventDefault();
    const info = { source, amount, date };
    setBalance(balance + parseInt(info.amount));
    setIncome(income + parseInt(info.amount))
    setTransactions(transactions.concat(info));
    console.log(info.amount);
  };

  console.log(transactions);

  const transactionList = transactions.map((info, index) => (
    <li key={index}>
      <div className="container">

        <div className="row list">
          <div className="col-4 d-flex align-items-center  justify-content-start">
            <p className="list-text mb-0">{info.date}</p>
          </div>
          <div className="col-4 d-flex align-items-center  justify-content-start">
            <p className="list-text mb-0">{info.source}</p>
          </div>
          <div className="col-4 d-flex align-items-center  justify-content-end">
            <p className="list-text mb-0">£{info.amount}</p>
          </div>
        </div>
      </div>
    </li>
  ));

  return (
    <div className="container" id="calculator">
      <div className="calculator-header">
        <p className='calc-headline'>Money Planner Calculator</p>
        <h1 className='calc-title'>Try out our budget calculator and organise your payments</h1>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-6 order-md-2 wallet">
          <h2 className="balance">Balance : {balance} </h2>
          <div className="container mb-5">
            <div className="row spending-content">
              <div className="col-6 border-middle">
                <p className="mb-0 expense" >Expenses</p>
                <p className="mb-0 expense-value">{expense}</p>
              </div>
              <div className="col-6">
                <p className="mb-0 income" >Income</p>
                <p className="mb-0 income-value">{income}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 order-md-1 user-transactions">
          <form>
            <div className="container">
              <div className="row user-input">
                <label className="col-sm-6" for="source">
                  {" "}
                  Expense type{" "}
                </label>
                <select
                  className="form-control col-sm-6 input-data"
                  id="source"
                  value={source}
                  placeholder="What is this for?"
                  onChange={(e) => setSource(e.target.value)}
                >
                  <option value="Rent">Rent</option>
                  <option value="Gift">Gift</option>
                  <option value="Travel">Travel</option>
                  <option value="Electricity">Electricity</option>
                  <option value="Groceries">Groceries</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div className="row user-input">
                <label className="col-sm-6" for="value">
                  {" "}
                  Value{" "}
                </label>
                <input
                  className="form-control col-sm-6 input-data"
                  type="text"
                  id="value"
                  value={amount}
                  placeholder="Input a value"
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
              <div className="row user-input">
                <div className="col-sm-6" for="date">
                  {" "}
                  What day is this?
                </div>
                <input
                  className="form-control col-sm-6 input-data"
                  type="date"
                  id="date"
                  value={date}
                  placeholder="What is todays date"
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            </div>
            <div className="user-button">
              <button onClick={handleSubmitIncome} className="m-2">Income</button>
              <button onClick={handleSubmitExpenses} className="m-2">Expenses</button>
            </div>

          </form>

          <div>
            <ul className="container transaction-container mt-5 ">
              <div className="row">
                <div className="col-4 d-flex align-items-center  justify-content-start">
                  <p className="mb-0 px-3">Date</p>
                </div>
                <div className="col-4 d-flex align-items-center  justify-content-start">
                  <p className="mb-0 px-3">Source</p>
                </div>
                <div className="col-4 d-flex align-items-center  justify-content-end">
                  <p className="mb-0 ">Amount</p>
                </div>
              </div>
              {transactionList}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inpute;
