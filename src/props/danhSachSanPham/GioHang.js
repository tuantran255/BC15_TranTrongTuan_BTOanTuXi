import React, { Component } from "react";

export default class GioHang extends Component {
  render() {
    let { gioHang, xoaGioHang, tangSoLuong, giamSoLuong, tangGiamSoLuong } =
      this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Mã sản phẩm</th>
            <th>Hình ảnh</th>
            <th>Tên sản phẩm</th>
            <th>Giá bán</th>
            <th>Số lượng</th>
            <th>Thành tiền</th>
          </tr>
        </thead>
        <tbody>
          {gioHang.map((spGH, index) => {
            return (
              <tr key={index}>
                <td>{spGH.maSP}</td>
                <td>
                  <img src={spGH.hinhAnh} alt="..." width="50" />
                </td>
                <td>{spGH.tenSP}</td>
                <td>
                  <button
                    className="btn btn-primary mr-3"
                    style={{ width: 40 }}
                    // onClick={() => {
                    //   tangSoLuong(spGH.maSP);
                    // }}
                    onClick={() => {
                      tangGiamSoLuong(spGH.maSP, 1);
                    }}
                  >
                    +
                  </button>
                  {spGH.soLuong}
                  <button
                    className="btn btn-primary ml-3"
                    style={{ width: 40 }}
                    // onClick={() => {
                    //   giamSoLuong(spGH.maSP);
                    // }}
                    onClick={() => {
                      tangGiamSoLuong(spGH.maSP, -1);
                    }}
                  >
                    -
                  </button>
                </td>
                <td>{spGH.giaBan * spGH.soLuong}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      xoaGioHang(spGH.maSP);
                    }}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
