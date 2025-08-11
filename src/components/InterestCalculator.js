import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./InterestCalculator.css";

function InterestCalculator() {
  const [amount, setAmount] = useState("");
  const [months, setMonths] = useState(1);
  const [result, setResult] = useState(null);
  const history = useHistory();

  const calculatePayment = (e) => {
    e.preventDefault();
    const principal = parseFloat(amount);
    const interestRate = 0.2; // 20% non-compounding interest
    const totalInterest = principal * interestRate;
    const totalAmount = principal + totalInterest;
    const monthlyPayment = totalAmount / months;

    setResult({
      monthlyPayment: monthlyPayment.toFixed(2),
      totalAmount: totalAmount.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
    });
  };

  return (
    <div className="interest-calculator">
      <button onClick={() => history.goBack()} className="back-button">
        &larr; Back to Shop
      </button>

      <h2>Payment Plan Calculator</h2>
      <p>Calculate your monthly payments with 20% interest</p>

      <form onSubmit={calculatePayment}>
        <div className="form-group">
          <label htmlFor="amount">Total Shopping Amount (R)</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            min="1"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="months">Payment Period (months)</label>
          <input
            type="number"
            id="months"
            value={months}
            onChange={(e) =>
              setMonths(Math.max(1, parseInt(e.target.value) || 1))
            }
            min="1"
            max="24"
            required
          />
        </div>

        <button type="submit" className="calculate-button">
          Calculate Payment
        </button>
      </form>

      {result && (
        <div className="result-container">
          <h3>Payment Plan Summary</h3>
          <div className="result-item">
            <span>Monthly Payment:</span>
            <span>R{result.monthlyPayment}</span>
          </div>
          <div className="result-item">
            <span>Total Interest:</span>
            <span>R{result.totalInterest}</span>
          </div>
          <div className="result-item">
            <span>Total Amount Payable:</span>
            <span>R{result.totalAmount}</span>
          </div>
          <div className="result-item">
            <span>Payment Period:</span>
            <span>
              {months} month{months !== 1 ? "s" : ""}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default InterestCalculator;
