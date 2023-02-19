import React, { useState } from "react";
import './input.css'

const Inpute = () => {
  const [source, setSource] = useState("rent");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const handleSubmitExpenses = (e) => {
    e.preventDefault();
    const info = { source, amount, date };
    setBalance(balance - parseInt(info.amount));
    setTransactions(transactions.concat(info));
    console.log(info);
  };

  const handleSubmitIncome = (e) => {
    e.preventDefault();
    const info = { source, amount, date };
    setBalance(balance + parseInt(info.amount));
    setTransactions(transactions.concat(info));
    console.log(info.amount);
  };

  console.log(transactions);

  const transactionList = transactions.map((info, index) => (
    <li key={index}>
      <div className="container">
      
        <div className="row">
          <div className="col-sm-4">
            <p>{info.date}</p>
          </div>
          <div className="col-sm-4">
            <p>{info.source}</p>
          </div>
          <div className="col-sm-4">
            <p>${info.amount}</p>
          </div>
        </div>
      </div>
    </li>
  ));

  return (
    <div className="container">
      <h2>Balance : {balance} </h2>
      <form>
        <div className="container">
          <div className="row">
            <label className="col-sm-6" for="source">
              {" "}
              Expense type{" "}
            </label>
            <select
              className="form-control col-sm-6"
              id="source"
              value={source}
              placeholder="What is this for?"
              onChange={(e) => setSource(e.target.value)}
            >
              <option value="rent">rent</option>
              <option value="gift">gift</option>
              <option value="travel">travel</option>
              <option value="electricity">electricity</option>
              <option value="groceries">groceries</option>
              <option value="others">others</option>
            </select>
          </div>
          <div className="row">
            <label className="col-sm-6" for="value">
              {" "}
              Value{" "}
            </label>
            <input
              className="form-control col-sm-6"
              type="text"
              id="value"
              value={amount}
              placeholder="Inpute a value"
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="row">
            <div className="col-sm-6" for="date">
              {" "}
              What day is this?
            </div>
            <input
              className="form-control col-sm-6"
              type="date"
              id="date"
              value={date}
              placeholder="What is todays date"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>
        <div className="">
        <button onClick={handleSubmitIncome} className="m-2">Income</button>
        <button onClick={handleSubmitExpenses}  className="m-2">Expenses</button>
        </div>
       
      </form>
      
      <div>
        <ul className="container">
        <div className="row">
          <div className="col-sm-4">
            <p>Date</p>
          </div>
          <div className="col-sm-4">
            <p>Source</p>
          </div>
          <div className="col-sm-4">
            <p>Amount</p>
          </div>
        </div>
          {transactionList}
        </ul>
      </div>
    </div>
  );
};

export default Inpute;