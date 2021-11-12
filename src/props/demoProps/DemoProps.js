import React, { Component } from "react";
import Card from "./Card";

export default class DemoProps extends Component {
  render() {
    return (
      <div>
        <Card hoTen="Hùng" tuoi="18"/>
        <Card hoTen="Tuấn" tuoi="20"/>
        <Card hoTen="Duy" tuoi="21"/>
      </div>
    );
  }
}
