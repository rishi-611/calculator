import React from "react";

class Display extends React.Component {
  render() {
    return (
      <div className="display" id="display">
        <div className="input" id="input">
          {this.props.input}
        </div>
        <div className="answer" id="answer">
          {this.props.answer}
        </div>
      </div>
    );
  }
}

export default Display;
