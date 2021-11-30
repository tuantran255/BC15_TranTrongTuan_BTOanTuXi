import {
  CHON_KEO_BUA_BAO,
  KET_QUA,
  RAN_DOM,
} from "../actions/types/BTOanTuXiTypes";

const stateDefault = {
  mangDatCuoc: [
    { ma: "keo", hinhAnh: "./img/gameOanTuXi/keo.png", datCuoc: true },
    { ma: "bua", hinhAnh: "./img/gameOanTuXi/bua.png", datCuoc: false },
    { ma: "bao", hinhAnh: "./img/gameOanTuXi/bao.png", datCuoc: false },
  ],
  ketQua: "You Win!!!",
  soBanThang: 0,
  soBanChoi: 0,
  bot: { ma: "bao", hinhAnh: "./img/gameOanTuXi/bao.png" },
};

export const BTOanTuXiReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case CHON_KEO_BUA_BAO:
      let mangCuocUpdate = [...state.mangDatCuoc].map((item, index) => {
        if (item.ma === action.maCuoc) {
          return { ...item, datCuoc: true };
        }
        return { ...item, datCuoc: false };
      });
      state.mangDatCuoc = mangCuocUpdate;
      return { ...state };
    case RAN_DOM:
      let soNgauNhien = Math.floor(Math.random() * 3);
      let luaChonNgauNhien = state.mangDatCuoc[soNgauNhien];
      state.bot = luaChonNgauNhien;
      return { ...state };
    case KET_QUA:
      let playerChoice = state.mangDatCuoc.find(
        (item) => item.datCuoc === true
      ).ma;
      let botChoice = state.bot.ma;
      switch (playerChoice) {
        case "keo":
          botChoice === "keo"
            ? (state.ketQua = "Draw!!!")
            : botChoice === "bua"
            ? (state.ketQua = "You Lose!!!")
            : (state.ketQua = "You Win!!!") && (state.soBanThang += 1);
          break;
        case "bua":
          botChoice === "bua"
            ? (state.ketQua = "Draw!!!")
            : botChoice === "bao"
            ? (state.ketQua = "You Lose!!!")
            : (state.ketQua = "You Win!!!") && (state.soBanThang += 1);
          break;
        case "bao":
          botChoice === "bao"
            ? (state.ketQua = "Draw!!!")
            : botChoice === "keo"
            ? (state.ketQua = "You Lose!!!")
            : (state.ketQua = "You Win!!!") && (state.soBanThang += 1);
          break;
        default:
          state.ketQua = "You Win!!!";
          break;
      }
      state.soBanChoi += 1;
      return { ...state };
    default:
      return { ...state };
  }
};
