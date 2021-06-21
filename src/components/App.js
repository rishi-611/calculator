import React from "react";
import Display from "./Display";
import Numpad from "./Numpad";
import "../css/app.css";

const numbers = [
  {
    id: "one",
    value: "1",
  },
  {
    id: "two",
    value: "2",
  },
  {
    id: "three",
    value: "3",
  },
  {
    id: "four",
    value: "4",
  },
  {
    id: "five",
    value: "5",
  },
  {
    id: "six",
    value: "6",
  },
  {
    id: "seven",
    value: "7",
  },
  {
    id: "eight",
    value: "8",
  },
  {
    id: "nine",
    value: "9",
  },
  {
    id: "zero",
    value: "0",
  },
];

const operators = [
  {
    id: "add",
    value: "+",
  },
  {
    id: "subtract",
    value: "-",
  },
  {
    id: "multiply",
    value: "x",
  },
  {
    id: "divide",
    value: "/",
  },
  {
    id: "equals",
    value: "=",
  },
];

const App = function () {
  return (
    <div className="container-sm calculator">
      <Display />
      <Numpad numbers={numbers} operators={operators} />
    </div>
  );
};

export default App;
