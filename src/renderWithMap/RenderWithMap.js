import React, { Component, forwardRef } from "react";

export default class RenderWithMap extends Component {
  productList = [
    {
      id: 1,
      name: "black car",
      img: "./images/CarBasic/products/black-car.jpg",
      price: 1000,
    },
    {
      id: 2,
      name: "red car",
      img: "./images/CarBasic/products/red-car.jpg",
      price: 2000,
    },
    {
      id: 3,
      name: "silver car",
      img: "./images/CarBasic/products/silver-car.jpg",
      price: 3000,
    },
    {
      id: 4,
      name: "steel car",
      img: "./images/CarBasic/products/steel-car.jpg",
      price: 4000,
    },
  ];

  cardList = [
    { img: "http://picsum.photos/200", name: "abc", price: 3000 },
    { img: "http://picsum.photos/200", name: "xyz", price: 5000 },
    { img: "http://picsum.photos/200", name: "bve", price: 1000 },
    { img: "http://picsum.photos/200", name: "jhyt", price: 2000 },
  ];

  renderTable = () => {
    // Cách 1:
    // let arrJSX = [];
    // for (let product of this.productList) {
    //   let tr = (
    //     <tr>
    //       <th>{product.id}</th>
    //       <th>{product.name}</th>
    //       <th>{product.price}</th>
    //       <th>
    //         <img src={product.img} alt="" width="50" height="50" />
    //       </th>
    //     </tr>
    //   );
    //   arrJSX.push(tr);
    // }
    // return arrJSX;

    //Cách 2: Sử dụng hàm map ES6
    return this.productList.map((product, index) => {
      return (
        <tr key={index}>
          <th>{product.id}</th>
          <th>{product.name}</th>
          <th>{product.price}</th>
          <th>
            <img src={product.img} alt="" width="50" height="50" />
          </th>
        </tr>
      );
    });
  };

  renderWithCard = () => {
    return this.productList.map((product, index) => {
      return (
        <div className="col-3">
          <div className="card">
            <img src={product.img} alt="..." className="w-100" />
          </div>
          <div className="card-body bg-dark text-white">
            <p>Name: {product.name}</p>
            <p>Price: {product.price}</p>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <h3 className="text-center">Render with Map</h3>
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>price</th>
              <th>img</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.renderTable()}
            {/* <tr>
              <th>1</th>
              <th>red car</th>
              <th>1000</th>
              <th>
                <img
                  src="https://picsum.photos/200"
                  alt=""
                  width="50"
                  height="50"
                />
              </th>
            </tr>
            <tr>
              <th>2</th>
              <th>red car</th>
              <th>1000</th>
              <th>
                <img
                  src="https://picsum.photos/200"
                  alt=""
                  width="50"
                  height="50"
                />
              </th>
            </tr> */}
          </tbody>
        </table>
        <h3 className="text-center">Render with Card</h3>
        <div className="row">
          {this.renderWithCard()}
          {/* <div className="col-4">
            <div className="card">
              <img
                src="https://picsum.photos/200"
                alt="..."
                className="w-100"
              />
            </div>
            <div className="card-body bg-dark text-whtie">
              <p>Product name</p>
              <p>Product price</p>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}
