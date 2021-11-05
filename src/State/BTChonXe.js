import React, { Component } from "react";

export default class BTChonXe extends Component {
  state = {
    imgSrc: "./images/CarBasic/products/black-car.jpg",
  };
  changeCar = (source) => {
    this.setState({
      imgSrc: source,
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-8">
            <img src={this.state.imgSrc} alt="" className="w-100" />
          </div>
          <div className="col-4">
            <button
              className="btn btn-outline-dark d-block mb-2"
              style={{ width: 300 }}
              onClick={() => {
                this.changeCar("./images/CarBasic/products/black-car.jpg");
              }}
            >
              <div className="d-flex align-items-center">
                <img
                  src="./images/CarBasic/icons/icon-black.jpg"
                  alt=""
                  width="50px"
                />
                <div className="ml-3">
                  <h4>Crystal Black</h4>
                  <p className="text-left mb-0">Pearl</p>
                </div>
              </div>
            </button>
            <button
              className="btn btn-outline-dark d-block mb-2"
              style={{ width: 300 }}
              onClick={() => {
                this.changeCar("./images/CarBasic/products/steel-car.jpg");
              }}
            >
              <div className="d-flex align-items-center">
                <img
                  src="./images/CarBasic/icons/icon-steel.jpg"
                  alt=""
                  width="50px"
                />
                <div className="ml-3">
                  <h4>Modern Steel</h4>
                  <p className="text-left mb-0">Metallic</p>
                </div>
              </div>
            </button>
            <button
              className="btn btn-outline-dark d-block mb-2"
              style={{ width: 300 }}
              onClick={() => {
                this.changeCar("./images/CarBasic/products/silver-car.jpg");
              }}
            >
              <div className="d-flex align-items-center">
                <img
                  src="./images/CarBasic/icons/icon-silver.jpg"
                  alt=""
                  width="50px"
                />
                <div className="ml-3">
                  <h4>Luna Silver</h4>
                  <p className="text-left mb-0">Metallic</p>
                </div>
              </div>
            </button>
            <button
              className="btn btn-outline-dark d-block mb-2"
              style={{ width: 300 }}
              onClick={() => {
                this.changeCar("./images/CarBasic/products/red-car.jpg");
              }}
            >
              <div className="d-flex align-items-center">
                <img
                  src="./images/CarBasic/icons/icon-red.jpg"
                  alt=""
                  width="50px"
                />
                <div className="ml-3">
                  <h4>Rallye Red</h4>
                  <p className="text-left mb-0">Metallic</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
