import React, { Component } from "react";
import "./BaiTapOanTuXi.css";
import Bot from "./Bot";
import KetQua from "./KetQua";
import Player from "./Player";
import { connect } from "react-redux";
import {
  ketQuaAction,
  randomAction,
} from "../../redux/actions/BTOanTuXiActions";

class BaiTapOanTuXi extends Component {
  render() {
    return (
      <div className="gameOanTuXi">
        <div className="row text-center mt-5">
          <div className="col-4">
            <Player />
          </div>
          <div className="col-4">
            <KetQua />
            <button
              className="btn btn-success mt-4"
              onClick={() => {
                {
                  let count = 0;
                  //Khai báo hàm lặp đi lặp lại
                  let randomBotItem = setInterval(() => {
                    this.props.dispatch(randomAction());
                    count++;
                    if (count > 15) {
                      //Dừng hàm Interval
                      clearInterval(randomBotItem);
                      this.props.dispatch(ketQuaAction());
                    }
                  }, 100);
                }
              }}
            >
              Play Game
            </button>
          </div>
          <div className="col-4">
            <Bot />
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(BaiTapOanTuXi);
