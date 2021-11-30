import React, { Component, PureComponent } from "react";

export default class Child extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("constructor child");
  }

  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps child");
    return null;
  }

//   shouldComponentUpdate(newProps, newState) {
//     if (this.props.like !== newProps.like) {
//       console.log("shouldComponentUpdate child");
//       return true;
//     }
//     return false;
//   }

  render() {
    console.log("renderChild");
    return (
      <div>
        <h1 className="bg-dark text-white p-5">
          Child component: {this.props.like} like
        </h1>
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate Child");
  }

  componentDidMount() {
    console.log("componentDidMount child");
  }
}
