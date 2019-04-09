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
  }

  switchComponent() {
    if(this.state.component == 1){
      this.setState({ component: 2 })
    }else{
      this.setState({ component: 1 })
    }
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
