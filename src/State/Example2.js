import React, { Component } from "react";
//Chèn link hình cách 2:
// import imgCar from "../assets/img/CarBasic/products/black-car.jpg"

export default class Example2 extends Component {
  state = {
    imgCar: "./img/CarBasic/products/black-car.jpg",
  };
  changeColor = (color) => {
    this.setState({
      imgCar: `./img/CarBasic/products/${color}-car.jpg`,
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img src={this.state.imgCar} alt="" className="w-100" />
            {/* Import hình cách 2 */}
            {/* <img src={imgCar} alt="..." className="w-100" /> */}
          </div>
          <div className="col-6">
            {/* Cách 1: */}
            {/* <button
              className="btn btn-danger text-white"
              onClick={() => {
                this.setState({
                  imgCar: "./img/CarBasic/products/red-car.jpg",
                });
              }}
            >
              Red
            </button>
            <button
              className="btn btn-dark"
              onClick={() => {
                this.setState({
                  imgCar: "./img/CarBasic/products/black-car.jpg",
                });
              }}
            >
              Black
            </button>
            <button
              className="btn btn-default"
              style={{ backgroundColor: "#EEE" }}
              onClick={() => {
                this.setState({
                  imgCar: "./img/CarBasic/products/silver-car.jpg",
                });
              }}
            >
              Silver
            </button>
            <button
              className="btn"
              style={{ backgroundColor: "gray", color: "#000" }}
              onClick={() => {
                this.setState({
                  imgCar: "./img/CarBasic/products/steel-car.jpg",
                });
              }}
            >
              Steel
            </button> */}

            <button
              className="btn btn-danger text-white"
              onClick={() => {
                this.changeColor("red");
              }}
            >
              Red
            </button>
            <button
              className="btn btn-dark"
              onClick={() => {
                this.changeColor("black");
              }}
            >
              Black
            </button>
            <button
              className="btn btn-default"
              style={{ backgroundColor: "#EEE" }}
              onClick={() => {
                this.changeColor("silver");
              }}
            >
              Silver
            </button>
            <button
              className="btn"
              style={{ backgroundColor: "gray", color: "#000" }}
              onClick={() => {
                this.changeColor("steel");
              }}
            >
              Steel
            </button>
          </div>
        </div>
      </div>
    );
  }
}
