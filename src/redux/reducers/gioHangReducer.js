//Giá trị mặc định ban đầu của state
const stateDefault = [];

export const gioHangReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "THEM_GIO_HANG": {
      // let gioHang = state;
      let spGH = state.find((sp) => sp.maSP === action.spGH.maSP);
      if (spGH) {
        spGH.soLuong++;
      } else {
        state.push(action.spGH);
      }
      //Trả về state mới => giao diện mới cập nhật
      //Immutable: Tính bất biến của redux
      return [...state]; //Trả về state sau khi xử lý
    }

    case "XOA_GIO_HANG": {
      let gioHangCapNhat = state.filter((sp) => sp.maSP !== action.maSP);
      return [...gioHangCapNhat];
    }

    case "TANG_GIAM_SO_LUONG": {
      let gioHangCapNhat = [...state];
      let spGH = gioHangCapNhat.find((sp) => sp.maSP === action.maSP);
      if (spGH) {
        spGH.soLuong += action.soLuong;
        if (spGH.soLuong < 1) {
          spGH.soLuong -= action.soLuong;
          alert("Số lượng tối thiểu là 1");
        }
      }
      return gioHangCapNhat;
    }
  }
  return state;
};
