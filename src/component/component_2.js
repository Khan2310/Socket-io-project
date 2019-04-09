import React, { Component } from "react";
import MountainImage from "./mountain.jpg";
//import logo from './logo.png';

export default class Component_2 extends Component {
  render() {
    return (
      <div className="world">
        <img src={MountainImage} />
      </div>
    );
  }
}
