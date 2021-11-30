import React, { Component } from "react";
import { connect } from "react-redux";
import { nguoiDungChonAction } from "../../redux/actions/BTOanTuXiActions";

class Player extends Component {
  render() {
    return (
      <div>
        <div className="playerChoice">
          <img
            src={
              this.props.mangDatCuoc.find((item) => item.datCuoc === true)
                .hinhAnh
            }
            alt={
              this.props.mangDatCuoc.find((item) => item.datCuoc === true)
                .hinhAnh
            }
            width="75%"
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          src="./img/gameOanTuXi/player.png"
          alt="./img/gameOanTuXi/player.png"
          width="200"
        />
        <div className="text-center">
          {this.props.mangDatCuoc.map((item, index) => {
            //Xét giá trị đặt cược thêm viền cho item được chọn
            let boxShadow = {};
            if (item.datCuoc) {
              boxShadow = { boxShadow: "0 0 0 0.2rem rgba(38,255,143, 0.5)" };
            }
            return (
              <button
                onClick={() => {
                  this.props.dispatch(nguoiDungChonAction(item.ma));
                }}
                style={boxShadow}
                key={index}
                className="btnChoice btn btn-light mr-4"
              >
                <img src={item.hinhAnh} alt={item.hinhAnh} />
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    mangDatCuoc: rootReducer.BTOanTuXiReducer.mangDatCuoc,
  };
};

export default connect(mapStateToProps)(Player);
