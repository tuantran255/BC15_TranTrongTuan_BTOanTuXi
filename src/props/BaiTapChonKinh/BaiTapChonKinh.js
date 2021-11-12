import React, { Component } from "react";
import style from "./StyleGlasses.module.css";

export default class BaiTapChonKinh extends Component {
  mangKinh = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./glassesImage/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./glassesImage/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./glassesImage/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./glassesImage/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./glassesImage/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./glassesImage/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];

  state = {
    url: "./glassesImage/v1.png",
    name: "GUCCI G8850U",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  };

  renderGlassInFace = () => {
    return (
      <div>
        <div className={style.desc}>
          <h4>{this.state.name}</h4>
          <p>{this.state.desc}</p>
        </div>
        <div className={style.imgGlass}>
          <img src={this.state.url} alt="..." />
        </div>
      </div>
    );
  };

  renderAllGlass = () => {
    return this.mangKinh.map((glass, index) => {
      return (
        <div className="col-2" key={index}>
          <button
            className="btn btn-light"
            style={{ border: "1px solid black" }}
            onClick={() => {
              this.setState({
                url: glass.url,
                name: glass.name,
                desc: glass.desc,
              });
            }}
          >
            <img src={glass.url} alt="glass" width="100%" />
          </button>
        </div>
      );
    });
  };

  render() {
    return (
      <div className={style.bg}>
        <div
          className="text-center text-white display-4 pb-4 pt-3"
          style={{ backgroundColor: `rgba(0, 0, 0, 0.7)` }}
        >
          <h4>TRY GLASSES APP ONLINE</h4>
        </div>
        <div className="container mt-5">
          <div className="d-flex justify-content-between align-items-center px-5 mx-5">
            <div className={style.face}>
              <img src="./glassesImage/model.jpg" alt="..." />
              {this.renderGlassInFace()}
            </div>
            <div className={style.face}>
              <img src="./glassesImage/model.jpg" alt="..." />
            </div>
          </div>
          <div className="row mt-5 bg-white p-5">{this.renderAllGlass()}</div>
        </div>
      </div>
    );
  }
}
