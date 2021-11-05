import React, { Component } from "react";
import ChiaLayoutBanner from "./ChiaLayoutBanner";
import ChiaLayoutItem from "./ChiaLayoutItem";

export default class ChiaLayoutContent extends Component {
  render() {
    return (
      <div>
        <ChiaLayoutBanner />
        <ChiaLayoutItem />
      </div>
    );
  }
}
