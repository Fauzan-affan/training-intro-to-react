import React from "react";

class ConditionalRender extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    return this.state.isLoggedIn ? (
      <div>Welcome Roni</div>
    ) : (
      <div>Welcome Guest</div>
    );
  }
}

export default ConditionalRender;