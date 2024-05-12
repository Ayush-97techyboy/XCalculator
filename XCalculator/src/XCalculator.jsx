import React, { useState } from "react";
import styles from "./XCalculator.module.css";
export default function XCalculator() {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");

  const handleNumberClick = (number) => {
    setInputValue(inputValue + number);
  };

  const handleOperatorClick = (operator) => {
    setInputValue(inputValue + operator);
  };

  const handleClearClick = () => {
    setInputValue("");
    setResult("");
  };

  const calculateResult = () => {
    try {
      setResult(eval(inputValue).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div>
      <input type="text" className={styles.inp} value={inputValue} readOnly placeholder="0" />
      <div className={styles.res}>
        <label>{result}</label>
      </div>

      <div className={styles.numPad}>
        {[7, 8, 9].map((number) => (
          <button
            key={number}
            onClick={() => handleNumberClick(number.toString())}
            className={styles.btn}
          >
            {number}
          </button>
        ))}
        <button className={styles.btn} onClick={() => handleOperatorClick("+")}>
          +
        </button>
      </div>

      <div className={styles.numPad}>
        {[4, 5, 6].map((number) => (
          <button
            key={number}
            onClick={() => handleNumberClick(number.toString())}
            className={styles.btn}
          >
            {number}
          </button>
        ))}
        <button className={styles.btn} onClick={() => handleOperatorClick("-")}>
          -
        </button>
      </div>

      <div className={styles.numPad}>
        {[1, 2, 3].map((number) => (
          <button
            key={number}
            onClick={() => handleNumberClick(number.toString())}
            className={styles.btn}
          >
            {number}
          </button>
        ))}

        <button className={styles.btn} onClick={() => handleOperatorClick("*")}>
          *
        </button>
      </div>

      <div className={styles.numPad}>
        <button className={styles.btn} onClick={handleClearClick}>
          C
        </button>

        {[0].map((number) => (
          <button
            key={number}
            onClick={() => handleNumberClick(number.toString())}
            className={styles.btn}
          >
            {number}
          </button>
        ))}

        <button className={styles.btn} onClick={calculateResult}>
          =
        </button>
        <button className={styles.btn} onClick={() => handleOperatorClick("/")}>
          /
        </button>
      </div>
    </div>
  );
}
