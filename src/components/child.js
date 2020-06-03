import React, { Component } from "react";
class Child extends Component {
  state = {
    word: "",
  };

  render() {
    return (
      <div className="saghroun">
        <input
          type="text"
          placeholder="Enter a word..."
          onChange={(e) => this.props.hetInput(e.target.value)}
        />
      </div>
    );
  }
}
export default Child;
