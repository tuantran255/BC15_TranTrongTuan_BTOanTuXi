import React, { Component } from "react";

export default class XucXac extends Component {
  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-4 text-center">
          <button className="btn btn-primary p-5 display-4"><span className="display-4">Tài</span></button>
          </div>
          <div className="col-4 text-center">
            <img
              src="https://picsum.photos/50"
              alt="..."
              width={50}
              height={50}
            />
            <img
              src="https://picsum.photos/50"
              alt="..."
              width={50}
              height={50}
            />
            <img
              src="https://picsum.photos/50"
              alt="..."
              width={50}
              height={50}
            />
          </div>
          <div className="col-4 text-center">
              <button className="btn btn-primary p-5 display-4"><span className="display-4">Xỉu</span></button>
            {/* <div className="mt-5" style={{ cursor: "pointer" }}>
              <span className="text-white display-4 px-5 py-4 bg-danger">
                Xỉu
              </span>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}
