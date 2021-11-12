import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    let sanPham = this.props.sanPham;
    let sp = this.props.sanPham;
    return (
      <div className="card">
        <img src={sanPham.hinhAnh} alt="" height={350} />
        <div className="card-body bg-dark text-white">
          <p>{sanPham.tenSP}</p>
          <p>{sanPham.giaBan}</p>
          <button
            className="btn btn-success"
            onClick={() => {
              this.xemChiTiet(sanPham);
            }}
          >
            Xem chi tiết
          </button>
        </div>
      </div>
    );
  }
}
