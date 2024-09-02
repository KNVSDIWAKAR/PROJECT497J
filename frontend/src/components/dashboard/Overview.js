import React from "react";
import "./Overveiw.css";
import Balance from "../Asserts/Balance.png";
import Savings from "../Asserts/Savings.png";
import Income from "../Asserts/Income.png";
import Expenses from "../Asserts/Expenses.png";
function Overview() {
  return (
    <section>
      <h3>Overview</h3>
      <section className="overview">
        <div className="card balance">
          <div className="icon-container balance-icon">
            <img src={Balance} alt="Balance Icon" />
          </div>
          <div className="details">
            <h4>$6245</h4>
            <p>Balance</p>
          </div>
          <span className="percentage">⬈ 10.8%</span>
        </div>
        <div className="card income">
          <div className="icon-container income-icon">
            <img src={Income} alt="Income Icon" />
          </div>
          <div className="details">
            <h4>$8560</h4>
            <p>Income</p>
          </div>
          <span className="percentage negative">⬊ 3.2%</span>
        </div>
        <div className="card savings">
          <div className="icon-container savings-icon">
            <img src={Savings} alt="Savings Icon" />
          </div>
          <div className="details">
            <h4>$818</h4>
            <p>Savings</p>
          </div>
          <span className="percentage">⬈ 2.5%</span>
        </div>
        <div className="card expenses">
          <div className="icon-container expenses-icon">
            <img src={Expenses} alt="Expenses Icon" />
          </div>
          <div className="details">
            <h4>$1497</h4>
            <p>Expenses</p>
          </div>
          <span className="percentage">⬈ 2.5%</span>
        </div>
      </section>
    </section>
  );
}

export default Overview;
