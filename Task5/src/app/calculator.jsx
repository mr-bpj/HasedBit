'use client'
import { useState } from "react";


const Calculator = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');

    const doAddition = () => {
        setResult(Number(num1) + Number(num2));
    };

    const doSubtraction = () => {
        setResult(Number(num1) - Number(num2));
    };

    const doMultiplication = () => {
        setResult(Number(num1) * Number(num2));
    };

    const doDivision = () => {
        setResult(Number(num1) / Number(num2));
    };

    return (
        <div className="calculator-container">
            <div className="calculator-header">
                {/* <FaCalculator className="calculator-icon" /> */}
                <h2>Calculator</h2>
            </div>
            <div className="calculator-body">
                <input
                    type="number"
                    className="calculator-input"
                    placeholder="Enter 1st Number"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                />
                <input
                    type="number"
                    className="calculator-input"
                    placeholder="Enter 2nd Number"
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}
                />
                <div className="calculator-buttons">
                    <button onClick={doAddition}>+</button>
                    <button onClick={doSubtraction}>-</button>
                    <button onClick={doMultiplication}>*</button>
                    <button onClick={doDivision}>/</button>
                </div>
                {result && <div className="calculator-result">Result: {result}</div>}
            </div>
        </div>
    );
};

export default Calculator;
