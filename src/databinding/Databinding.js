import React, { Component } from "react";

export default class Databinding extends Component {
  renderImg = () => {
    return (
      <div>
        <img src="http://picsum.photos/200" alt="" />
      </div>
    );
  };

  renderCard = () => {
    return (
      <div className="card w-25">
        {this.renderImg()}
        <div className="card-body">
          <p>Họ tên: ChiHuaHua</p>
          <p>Tuổi: 18</p>
        </div>
      </div>
    );
  };

  render() {
    let title = "Cybersoft";
    let scrImg = "http://i.pravatar.cc/300";
    let sinhVien = {
      maSV: 1,
      tenSv: "Nguyễn Văn A",
      namSinh: "05/09/1995",
      hinhAnh: "http://i.pravatar.cc/200",
    };
    return (
      <div className="container">
        Databinding
        {this.renderImg()}
        {this.renderCard()}
        <p id="txt">{title}</p>
        <br />
        <img src={scrImg} alt="..." />
        <br />
        <br />
        <div className="card w-25">
          <img src={sinhVien.hinhAnh} alt="..." />
          <div className="card-body">
            <p>Họ tên: {sinhVien.tenSv}</p>
            <p>Ngày sinh: {sinhVien.namSinh}</p>
          </div>
        </div>
      </div>
    );
  }
}
