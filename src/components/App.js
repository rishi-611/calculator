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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "0",
      currentNum: null,
      answer: "0",
    };
  }

  changeInput(inputKey) {
    switch (inputKey) {
      case "AC":
        this.setState({
          input: "0",
          currentNum: null,
          answer: "0",
        });
        break;

      case "*":
      case "+":
      case "-":
      case "/":
        this.setState((state) => ({
          input:
            state.input === "0"
              ? state.answer + inputKey
              : state.input.slice(-1) === "*" ||
                state.input.slice(-1) === "/" ||
                state.input.slice(-1) === "+" ||
                state.input.slice(-1) === "-"
              ? inputKey === "-"
                ? state.input + inputKey
                : state.input.slice(0, -1) + inputKey
              : state.input + inputKey,
          currentNum: null,
        }));
        break;

      case ".":
        this.setState((state) => ({
          input: state.currentNum?.includes(".")
            ? state.input
            : state.input + inputKey,
          currentNum: state.currentNum?.includes(".")
            ? state.currentNum
            : state.currentNum + inputKey,
        }));
        break;

      case "=":
        if (!isFinite(this.state.input.slice(-1))) {
          this.setState((state) => ({
            input: state.input.slice(0, -1),
          }));
          if (!isFinite(this.state.input.slice(-1))) {
            this.setState((state) => ({
              input: state.input.slice(0, -1),
            }));
          }
        }

        this.setState((state) => ({
          answer: String(eval(state.input).toFixed(4)),
          input: "0",
          currentNum: null,
        }));
        break;

      case "C":
        break;

      default:
        this.setState((state) => ({
          input:
            state.input === "0"
              ? inputKey
              : state.currentNum === "0"
              ? state.input.slice(0, -1) + inputKey
              : state.input + inputKey,
          currentNum:
            state.currentNum === null
              ? inputKey
              : state.currentNum === "0"
              ? inputKey
              : state.currentNum + inputKey,
        }));
        break;
    }
  }

  render() {
    // console.log(this.state);
    return (
      <div className="container-sm calculator">
        <Display input={this.state.input} answer={this.state.answer} />
        <Numpad
          numbers={numbers}
          operators={operators}
          input={this.state.input}
          changeInput={this.changeInput.bind(this)}
        />
      </div>
    );
  }
}

export default App;
