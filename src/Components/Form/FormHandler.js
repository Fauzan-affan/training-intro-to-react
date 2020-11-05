import React from "react";

class FormHandler extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "React",
    };
  }

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };

  handleSubmit = (event) => {
      event.preventDefault()
      alert(`Username: ${this.state.username}, Comments: ${this.state.comments}, Topic: ${this.state.topic}`)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Leave your comments below</h1>
        <div id="username">
          <label>Username: </label>
          <input type="text" name="username" onChange={this.myChangeHandler} />
        </div>
        <div id="comments">
          <label>Comments: </label>
          <textarea name="comments" onChange={this.myChangeHandler}></textarea>
        </div>
        <div id="topic">
          <label>Topic: </label>
          <select
            name="topic"
            value={this.state.topic}
            onChange={this.myChangeHandler}
          >
            <option value="React">React</option>
            <option value="Vue">Vue</option>
            <option value="Angular">Angular</option>
            <option value="Svelte">Svelte</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default FormHandler;