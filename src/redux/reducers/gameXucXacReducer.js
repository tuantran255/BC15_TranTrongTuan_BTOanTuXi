const stateDefault = {
  banChon: true, //true: tài - false: xỉu
  soBanThang: 5,
  tongSoBanChoi: 3,
};

export const gameXucXacReducer = (state = stateDefault, action) => {
  return { ...state };
};
