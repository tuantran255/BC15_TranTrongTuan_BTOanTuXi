import React, { Component } from "react";

export default class HandleEvent extends Component {
  handleClick = () => {
    alert("Hello world!");
  };
  handleClick1 = (name) => {
    alert(`Hello ${name}!`);
  };
  showMessage = (message) => {
    alert(message);
  };
  render() {
    return (
      <div className="container">
        <div>Handle Event</div>
        <button id="btn" onClick={this.handleClick}>
          Click me!
        </button>
        <br />
        <button
          className="btn btn-success"
          onClick={() => {
            alert("Hello CyberSoft!");
          }}
        >
          Show message
        </button>
        <hr />
        <button id="btn" onClick={this.handleClick1.bind(this, "Tuan")}>
          Click Me!
        </button>
        <br />
        <button
          id="btn"
          onClick={() => {
            this.showMessage("Hello world!");
          }}
        >
          Show message
        </button>
      </div>
    );
  }
}
