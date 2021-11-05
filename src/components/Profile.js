import React, { Component } from "react";

//React class component
export default class Profile extends Component {
  //Phương thức render là phương thức trả về component này
  render() {
    return (
      <div className="w-25">
        <div className="card text-left bg-dark text-light">
          <img
            className="card-img-top"
            src="http://i.pravatar.cc/300"
            alt="..."
          />
          <div className="card-body">
            <h4 className="card-title">Họ tên: Chihuahua</h4>
            <p className="card-text">Tuối: 18+</p>
          </div>
        </div>
      </div>
    );
  }
}
