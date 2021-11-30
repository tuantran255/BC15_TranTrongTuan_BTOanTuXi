import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    let sanPham = this.props.sanPham;
    let xemChiTiet = this.props.hamXemChiTiet;
    let {themGioHang} = this.props;
    return (
      <div className="card">
        <img src={sanPham.hinhAnh} alt="" height={350} />
        <div className="card-body bg-dark text-white">
          <p>{sanPham.tenSP}</p>
          <p>{sanPham.giaBan}</p>
          <button
            className="btn btn-success"
            onClick={() => {
              xemChiTiet(sanPham);
            }}
          >
            Xem chi tiết
          </button>
          <button
            className="btn btn-primary ml-3"
            onClick={() => {
              themGioHang(sanPham);
            }}
          >
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}
