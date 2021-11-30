import React, { Component } from "react";
import { connect } from "react-redux";

class KetQuaTroChoi extends Component {
  render() {
    return (
      <div className="container text-center">
        <div className="display-4">
          Bạn chọn: <span className="text-danger text-success">Tài</span>
        </div>
        <div className="display-4">
          Số bàn thắng: <span className="text-danger text-success">{this.props.soBanThang}</span>
        </div>
        <div className="display-4">
          Tổng số bàn chơi: <span className="text-danger text-success">{this.props.tongSoBanChoi}</span>
        </div>
        <div className="display-4">
          <button className="btn btn-success">Play game</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    banChon: rootReducer.gameXucXacReducer.banChon,
    soBanThang: rootReducer.gameXucXacReducer.soBanThang,
    tongSoBanChoi: rootReducer.gameXucXacReducer.tongSoBanChoi,
  };
};

export default connect(mapStateToProps)(KetQuaTroChoi);
