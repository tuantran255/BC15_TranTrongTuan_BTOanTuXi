import { combineReducers, createStore } from "redux";
import { gioHangReducer } from "./reducers/gioHangReducer";
import { gameXucXacReducer } from "./reducers/gameXucXacReducer";
import { BTQuanLyNguoiDungReducer } from "./reducers/BTQuanLyNguoiDungReducer";
import { BTOanTuXiReducer } from "./reducers/BTOanTuXiReducer";

const rootReducer = combineReducers({
  //Nơi chưa toàn bộ state của ứng dụng (Thay vì đặt dưới this.state của component)
  stateGioHang: gioHangReducer,
  gameXucXacReducer,
  BTQuanLyNguoiDungReducer,
  BTOanTuXiReducer,
});
export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
