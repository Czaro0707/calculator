import React from "react";
import Button from "./Button";

const calculatorButtons = [
  "7",
  "8",
  "9",
  "DEL",
  "4",
  "5",
  "6",
  "+",
  "1",
  "2",
  "3",
  "-",
  ".",
  "0",
  "/",
  "x",
  "RESET",
  "=",
];

const Calculator = () => {
  const buttons = calculatorButtons.map((button, index) => {
    return <Button button={button} key={index} />;
  });

  return <div className="calculator">{buttons}</div>;
};

export default Calculator;
