import { CHON_KEO_BUA_BAO, KET_QUA, RAN_DOM } from "./types/BTOanTuXiTypes";

export const nguoiDungChonAction = (maCuoc) => {
  return {
    type: CHON_KEO_BUA_BAO,
    maCuoc,
  };
};

export const randomAction = () => {
  return {
    type: RAN_DOM,
  };
};

export const ketQuaAction = () => {
    return {
        type: KET_QUA,
    }
}
