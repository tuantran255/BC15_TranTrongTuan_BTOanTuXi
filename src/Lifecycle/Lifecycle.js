import React, { Component } from "react";
import Child from "./Child";

export default class Lifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
      like: 1,
    };
    console.log("constructor");
  }

  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps");
    return null;
  }
  render() {
    console.log("render");
    return (
      <div className="container">
        <Child like={this.state.like}/>
        <h3>Number:{this.state.number}</h3>
        <button
          className="btn btn-success"
          onClick={() => {
            this.setState({ number: this.state.number + 1 });
          }}
        >
          +
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            this.setState({ like: this.state.like + 1 });
          }}
        >
          + like
        </button>
      </div>
    );
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
}
