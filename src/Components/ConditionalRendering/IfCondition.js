import React, { Component } from "react";

export default class IfCondition extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    if (this.state.isLoggedIn) {
      return <div>Welcome Roni</div>;
    } else {
      return <div>Welcome Guest</div>;
    }
  }
}