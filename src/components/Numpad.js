import React from "react";

const Numpad = function (props) {
  React.useEffect(() => {
    const handleBtnClick = (e) => {
      let inputVal = e.target.innerText;
      if (inputVal === "x") {
        inputVal = "*";
      }

      props.changeInput(inputVal);
    };

    const buttons = document.querySelectorAll(".button");
    buttons.forEach((btn) => btn.addEventListener("click", handleBtnClick));
  }, []);

  const renderNumbers = (numbers) => {
    return numbers.map((num) => {
      return (
        <div
          className="button num-btn dark-gray center-align"
          id={num.id}
          key={num.id}
        >
          {num.value}
        </div>
      );
    });
  };

  const renderOperators = (operators) => {
    return operators.map((op) => {
      return (
        <div
          className="button op-btn orange center-align"
          id={op.id}
          key={op.id}
        >
          {op.value}
        </div>
      );
    });
  };

  return (
    <div className="numpad mt-2">
      <div>
        <div className="clear-btns-container">
          <div className="button light center-align" id="clear">
            AC
          </div>
          <div className="button light center-align" id="esc">
            C
          </div>
        </div>
        <div className="numbers">
          {renderNumbers(props.numbers)}{" "}
          <div className="button num-btn dark-gray center-align" id="decimal">
            .
          </div>
        </div>
      </div>

      <div className="op-container">{renderOperators(props.operators)}</div>
    </div>
  );
};

export default Numpad;
