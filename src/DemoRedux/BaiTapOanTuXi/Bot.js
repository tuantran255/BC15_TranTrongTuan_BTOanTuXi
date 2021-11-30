import React, { Component } from "react";
import { connect } from "react-redux";

class Bot extends Component {
  render() {
    let keyframes = `@keyframes randomItem${Date.now()} {
        0% {top: -150px;}
        25% {top: 150px; opacity: 0}
        50% {top: -150px; opacity: 1}
        51% {top: 0;}
      }`;
    return (
      <div>
        <style>{keyframes}</style>
        <div className="playerChoice">
          <img
            src={this.props.bot.hinhAnh}
            alt={this.props.bot.hinhAnh}
            width="75%"
            style={{
              animation: `randomItem${Date.now()} 0.5s`,
              transform: "rotateY(180deg) translateX(50%)",
            }}
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          src="./img/gameOanTuXi/playerComputer.png"
          alt="./img/gameOanTuXi/playerComputer.png"
          width="200"
        />
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    bot: rootReducer.BTOanTuXiReducer.bot,
  };
};

export default connect(mapStateToProps)(Bot);
