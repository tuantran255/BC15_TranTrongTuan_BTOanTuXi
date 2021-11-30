const stateDefault = {
  mangNguoiDung: [
    {
      taiKhoan: "nguyenvana",
      matKhau: "123",
      hoTen: "Nguyễn Văn A",
      email: "nguyenvana@gamil.com",
      soDienThoai: "0958473627",
      maLoaiNguoiDung: "KhachHang",
    },
    {
      taiKhoan: "nguyenvanb",
      matKhau: "123",
      hoTen: "Nguyễn Văn B",
      email: "nguyenvanb@gamil.com",
      soDienThoai: "0958467627",
      maLoaiNguoiDung: "QuanTri",
    },
  ],
  nguoiDungChinhSua: {
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    email: "",
    soDienThoai: "",
    maLoaiNguoiDung: "",
  },
};

export const BTQuanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "THEM_NGUOI_DUNG":
      //   state.mangNguoiDung = [...state.mangNguoiDung, action.nguoiDung];
      //   return { ...state };

      //Cách full ES6
      return {
        ...state,
        mangNguoiDung: [...state.mangNguoiDung, action.nguoiDung],
      };
    case "XOA_NGUOI_DUNG":
      state.mangNguoiDung = [
        ...state.mangNguoiDung.filter(
          (nguoiDung) => nguoiDung.taiKhoan !== action.taiKhoan
        ),
      ];
      return { ...state };
    case "CHINH_SUA_NGUOI_DUNG":
      state.nguoiDungChinhSua = action.nguoiDung;
      return { ...state };
  }
  return state;
};
