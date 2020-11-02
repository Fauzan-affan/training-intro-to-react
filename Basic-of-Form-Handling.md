# Basic of Form Handling

Just like in HTML, React uses forms to allow users to interact with the web page. We are going to learn the basic handle of input forms in React. We'll see how to capture input from form element like the input tag, text area tag, select tag, and form submition.

First of all, lets create new class component and do not forget to import on main component.

```js
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

  render() {
    return (
      <form>
        <h1>Leave your comments below</h1>
        <div id="username">
          <label>Username: </label>
          <input type="text" name="username" />
        </div>
        <div id="comments">
          <label>Comments: </label>
          <textarea name="comments"></textarea>
        </div>
        <div id="topic">
          <label>Topic: </label>
          <select name="topic" value={this.state.topic}>
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
```

## Add Event Handler

There are two types of control forms in React,

1. Uncontrolled Component
2. Controlled Component

If we **immediately want to use the value of a tag without any data manipulation**, we can better use an Uncontrolled Component which only uses the `ref` attribute.

If we **want to manipulate the data before submitting it**, react recommended us to use a Controlled Component. We can use the event handler like `onChange={}` to call a function to perform data manipulation or store it in the state.

We use Controlled Component because we want store it to the state first before submit it so that we can manipulate it whenever we want. Create dynamic handler for our form outside the `render()` method:

```js
myChangeHandler = (event) => {
  let nam = event.target.name;
  let val = event.target.value;
  this.setState({ [nam]: val });
};
```

And do not forget to add `onChange={this.myChangeHandler}` to invoke `myChangeHandler` every time the user types or changes something in every our input, textarea, and select tags. **Make sure the name of every state equal as the name in tags**.

## Submit Handler

Now we want to submit our state and show the alert. Create a new method called `handleSubmit` and invoke it on form tag:

```js
handleSubmit = (event) => {
  event.preventDefault(); // disable reload behavior
  alert(
    `Username: ${this.state.username}, Comments: ${this.state.comments}, Topic: ${this.state.topic}`
  );
};
```

On form:

```js
<form onSubmit={this.handleSubmit}>
```

And now our component looks like:

```js
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
```
