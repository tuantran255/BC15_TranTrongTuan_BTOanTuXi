import React, { Component } from "react";
import { connect } from "react-redux";

class KetQua extends Component {
  render() {
    return (
      <div>
        <div className="display-4 text-warning">{this.props.ketQua}</div>
        <div className="display-4 text-success">
          Số bàn thắng: <span className="text-warning">{this.props.soBanThang}</span>
        </div>
        <div className="display-4 text-success">
          Số bàn chơi: <span className="text-warning">{this.props.soBanChoi}</span>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (rootReducer) => {
  return {
    ketQua: rootReducer.BTOanTuXiReducer.ketQua,
    soBanThang: rootReducer.BTOanTuXiReducer.soBanThang,
    soBanChoi: rootReducer.BTOanTuXiReducer.soBanChoi,
  };
};

export default connect(mapStateToProps)(KetQua);
