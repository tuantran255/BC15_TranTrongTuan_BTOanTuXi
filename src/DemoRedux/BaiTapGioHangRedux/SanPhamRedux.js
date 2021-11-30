import React, { Component } from "react";
import { connect } from "react-redux";

class SanPhamRedux extends Component {
  render() {
    // console.log(`props`, this.props);
    let { sanPham } = this.props;
    return (
      <div className="card">
        <img src={sanPham.hinhAnh} alt="" height={350} />
        <div className="card-body bg-dark text-white">
          <p>{sanPham.tenSP}</p>
          <p>{sanPham.giaBan}</p>

          <button
            className="btn btn-primary"
            onClick={() => {
              this.props.themGioHang(sanPham);
            }}
          >
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}

//Định nghĩa 1 hàm gửi dữ liệu lên redux
const mapDispatchToProps = (dispatch) => {
  //dispatch là 1 hàm của redux giúp mình đưa dữ liệu từ component lên redux

  return {
    themGioHang: (sanPhamClick) => {
      // console.log(`sanPhamClick`, sanPhamClick);
      //Gửi sản phẩm lên redux
      //Tạo ra spGioHang
      let spGH = { ...sanPhamClick, soLuong: 1 };
      //Định nghĩa action
      const action = {
        type: "THEM_GIO_HANG", //thuộc tính bắt buộc
        spGH: spGH,
      };
      //Dùng hàm dispatch từ redux cung cấp để đưa dữ liệu lên redux (reducer)
      dispatch(action);
    },
  };
};
export default connect(null, mapDispatchToProps)(SanPhamRedux);
