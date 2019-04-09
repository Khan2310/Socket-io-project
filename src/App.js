import React, { Component } from "react";
import io from "socket.io-client";
import ComponentOne from "./component/component_1";
import ComponentTwo from "./component/component_2";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      component: 1
    };

    this.socket = io("localhost:4000");
    this.socket.on("switch-image", data => {
      this.setState({ component: data });
      console.log(data,"in socket data");
    });

  }

  async switchComponent() {
    console.log(this.state.component,"before condition");

    if(this.state.component == 1){
      await this.setState({ component: 2 });
      this.socket.emit("switch-image",this.state.component);
      console.log(this.state.component,"in if condition");
    }else{
      await this.setState({ component: 1 });
      this.socket.emit("switch-image",this.state.component);
      console.log(this.state.component,"in else condition");
    }
    console.log(this.state.component,"after condition");
    console.log("clicked");
  }

  render() {
    return (
      <div className="App">
        <div className="send-button-box">
          <button className="button" onClick={this.switchComponent.bind(this)}>
            Switch Image
          </button>
        </div>
        <div>{this.state.component == 1 ? <ComponentOne /> : <ComponentTwo />}</div>
      </div>
    );
  }
}

export default App;
