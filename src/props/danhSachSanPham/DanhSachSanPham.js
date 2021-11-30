import React, { Component } from "react";
import GioHang from "./GioHang";
import SanPham from "./SanPham";

export default class DanhSachSanPham extends Component {
  mangDienThoai = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  ];

  state = {
    sanPhamChiTiet: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    gioHang: [
      {
        maSP: 1,
        tenSP: "VinSmart Live",
        hinhAnh: "./img/vsphone.jpg",
        giaBan: 5700000,
        soLuong: 1,
      },
    ],
  };

  //State tại đâu hàm xử lý setState sẽ nằm tại đó
  themGioHang = (sanPhamClick) => {
    // console.log(sanPhamClick)
    //tạo ra sp giỏ hàng
    let spGH = { ...sanPhamClick, soLuong: 1 };
    //lấy state giỏ hàng ra thêm sản phẩm này vào
    let gioHangCapNhat = this.state.gioHang;
    // gioHangCapNhat.push(spGH);

    //Kiểm tra sp đó đã có trong giỏ hàng chưa
    let sanPhamGioHang = gioHangCapNhat.find((sp) => sp.maSP === spGH.maSP);
    //Nếu sản phẩm đó đã có trong giỏ hàng rồi
    if (sanPhamGioHang) {
      sanPhamGioHang.soLuong++;
    } else {
      gioHangCapNhat.push(spGH);
    }

    //setState giỏ hàng, phải setState thì mới cập nhật lại giao diện
    this.setState({ gioHang: gioHangCapNhat });
  };

  xoaGioHang = (maSPClick) => {
    // console.log(maSPClick);
    //Xử lý xóa
    //Tìm vị trí sản phẩm trong mảng

    //Cách 1: dùng splice
    // let index = this.state.gioHang.findIndex((sp) => sp.maSP === maSPClick);
    // if (index !== -1) {
    //   //Xử lý xóa dựa vào index
    //   this.state.gioHang.splice(index, 1);
    // }

    //Cách 2:
    let gioHangCapNhat = this.state.gioHang.filter(
      (sp) => sp.maSP != maSPClick
    );

    //setState cập nhật lại giỏ hàng + render giao diện
    this.setState({ gioHang: gioHangCapNhat });
  };

  tangSoLuong = (maSPClick) => {
    let spGH = this.state.gioHang.find((sp) => sp.maSP === maSPClick);
    if (spGH) {
      spGH.soLuong++;
    }
    this.setState({ gioHang: this.state.gioHang });
  };

  giamSoLuong = (maSPClick) => {
    let spGH = this.state.gioHang.find((sp) => sp.maSP === maSPClick);
    if (spGH && spGH.soLuong !== 1) {
      spGH.soLuong--;
    }
    this.setState({ gioHang: this.state.gioHang });
  };

  tangGiamSoLuong = (maSPClick, soLuong) => {
    //1 là tăng -1 là giảm
    let spGH = this.state.gioHang.find((sp) => sp.maSP === maSPClick);
    if (spGH) {
      spGH.soLuong += soLuong;
      if (spGH.soLuong < 1) {
        spGH.soLuong -= soLuong;
        alert("Sản phẩm tối thiểu là 1");
      }
    }

    this.setState({ gioHang: this.state.gioHang });
  };

  renderSanPham = () => {
    return this.mangDienThoai.map((sanPham, index) => {
      return (
        <div className="col-4" key={index}>
          <SanPham
            themGioHang={this.themGioHang}
            sanPham={sanPham}
            hamXemChiTiet={this.xemChiTiet}
          />
          {/* <div className="card">
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
          </div> */}
        </div>
      );
    });
  };

  xemChiTiet = (sanPhamClick) => {
    //Xử lý thay đổi state: Lấy sản phẩm click thay thế cho sanPhamChiTiet ban đầu
    //this.state.sanPhamChiTiet = sanPhamClick;
    this.setState({ sanPhamChiTiet: sanPhamClick });
  };

  render() {
    let {
      maSP,
      tenSP,
      manHinh,
      heDieuHanh,
      cameraTruoc,
      cameraSau,
      ram,
      rom,
      giaBan,
      hinhAnh,
    } = this.state.sanPhamChiTiet;
    return (
      <div className="container">
        <div className="text-right">
          <span style={{ cursor: "pointer", color: "red", fontWeight: "bold" }}>
            Giỏ hàng ({this.state.gioHang.length})
          </span>
        </div>
        <div>
          <GioHang
            gioHang={this.state.gioHang}
            xoaGioHang={this.xoaGioHang}
            tangSoLuong={this.tangSoLuong}
            giamSoLuong={this.giamSoLuong}
            tangGiamSoLuong={this.tangGiamSoLuong}
          />
        </div>
        <h3 className="text-center display-4">Danh sách sản phẩm</h3>
        <div className="row">{this.renderSanPham()}</div>
        <div className="row mt-5">
          <div className="col-4">
            <h3>{tenSP}</h3>
            <img src={hinhAnh} width="100%" alt="" />
          </div>
          <div className="col-8">
            <table className="table">
              <thead>
                <tr>
                  <th>Màn hình</th>
                  <td>{manHinh}</td>
                </tr>
                <tr>
                  <th>Hệ điều hành</th>
                  <td>{heDieuHanh}</td>
                </tr>
                <tr>
                  <th>Camera trước</th>
                  <td>{cameraTruoc}</td>
                </tr>
                <tr>
                  <th>Camera sau</th>
                  <td>{cameraSau}</td>
                </tr>
                <tr>
                  <th>RAM</th>
                  <td>{ram}</td>
                </tr>
                <tr>
                  <th>ROM</th>
                  <td>{rom}</td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
