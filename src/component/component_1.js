import React, { Component } from "react";
import CarImage from "./car.jpg";
//import logo from './logo.png';

export default class Component_1 extends Component {
  render() {
    return (
      <div className="Hello">
        <img src={CarImage} />
      </div>
    );
  }
}
