import React, { Component } from "react";

export default class VariableConsition extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    let message;
    if (this.state.isLoggedIn) {
      message = <div>Welcome Roni</div>;
    } else {
      message = <div>Welcome Guest</div>;
    }

    return <div>{message}</div>;
  }
}
