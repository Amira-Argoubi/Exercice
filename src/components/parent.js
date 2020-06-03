import React, { Component } from "react";
import Child from "./child";

class Parent extends Component {
  state = {
    message: "",
  };

  wariMsg = (value) => {
    this.setState({ message: value });
  };
  render() {
    return (
      <div className="elbou">
        <div>Hello {this.state.message}</div>
        <Child hetInput={this.wariMsg} />
      </div>
    );
  }
}

export default Parent;
