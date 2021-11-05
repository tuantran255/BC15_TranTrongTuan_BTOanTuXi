import React, { Component } from "react";
//Cách 1: Import css áp dụng toàn dự án
import "./StyleDemo.css";
import style from "./StyleDemo.module.css";
export default class Style extends Component {
  render() {
    return (
      <div>
        <p className="color-red">Demo css</p>
        <h1>Cách 1</h1>
        <p className={style["color-green"]}>Hello</p>
        <h1>Cách 2: import css module</h1>
        <p className={style.colorGreen}>Hello1</p>
        <p className={`${style.colorGreen} ${style.fontBold}`}>Hello2</p>
        <hr />
        <h1>Cách 3: import css trực tiếp</h1>
        <p style={{ backgroundColor: "black", color: "green" }}>abc</p>
      </div>
    );
  }
}
