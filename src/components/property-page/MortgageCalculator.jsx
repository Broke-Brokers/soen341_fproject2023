import React from 'react';
import '../property-page/MortgageCalculator.css';
import { useState } from 'react';


// testing

export default function MortgageCalculator() {
    const [monthlyPayment, setMonthlyPayment] = useState(0);
    const [purchasePrice, setPurchasePrice] = useState(0);
    const [downPayment, setDownPayment] = useState(0);
    const [loanTerm, setLoanTerm] = useState(0);
    const [loanInterest, setLoanInterest] = useState(0);

    const MortgageCalculate = () => {
        let principal = purchasePrice - downPayment;
        let monthlyInterest = loanInterest / 100 / 12;
        let numberOfPayments = loanTerm * 12;
        let monthlyPrice =
            (principal * [monthlyInterest * (1 + monthlyInterest) ** numberOfPayments]) /
            [(1 + monthlyInterest) ** numberOfPayments - 1];
        let roundedMonthlyPrice = Math.round(monthlyPrice);
        setMonthlyPayment(roundedMonthlyPrice);
        console.log({ principal });
    };

    return (
        <div className="mortgageCalculator_container">
            <p className = "pretty-text" > THE MORTGAGE CALCULATOR</p>
            <input
                type="number"
                placeholder="Purchase Price..."
                onChange={(event) => {
                    setPurchasePrice(parseFloat(event.target.value));
                }}
            />
            <br />
            <input
                type="number"
                placeholder="Down Payment..."
                onChange={(event) => {
                    setDownPayment(parseFloat(event.target.value));
                }}
            />
            <br />
            <input
                type="number"
                placeholder="Loan Term..."
                onChange={(event) => {
                    setLoanTerm(parseFloat(event.target.value));
                }}
            />
            <br />
            <input
                placeholder="Loan Interest ..."
                onChange={(event) => {
                    setLoanInterest(parseFloat(event.target.value));
                }}
            />
            <br />
            <button onClick={MortgageCalculate}> Calculate</button>
            <h3>Monthly Payments: $ {monthlyPayment}</h3>
        </div>
    );
}
