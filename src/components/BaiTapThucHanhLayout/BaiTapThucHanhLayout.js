import React, { Component } from "react";
import ChiaLayoutContent from "./ChiaLayoutContent";
import ChiaLayoutFooter from "./ChiaLayoutFooter";
import ChiaLayoutNav from "./ChiaLayoutNav";

export default class BaiTapThucHanhLayout extends Component {
  render() {
    return (
      <div>
        <ChiaLayoutNav />
        <ChiaLayoutContent />
        <ChiaLayoutFooter />
      </div>
    );
  }
}
