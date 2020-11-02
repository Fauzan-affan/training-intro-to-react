# Conditional Rendering

When we are playing with user interface, we may want to decide whether to displaying and not displaying elements based on a condition. Conditional rendering in React works the same way as conditionals in Javascript. We have four different approaches:

1. If/else
1. Element variables
1. Ternary conditional operator
1. Short sircuit operator

## If/else

```js
import React from "react";

class ConditionalRender extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
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

export default ConditionalRender;
```

Same as conditionals in many programming languange, because `isLoggedIn` is `false`, so the `else` block was executed

## Element Variables

```js
import React from "react";

class ConditionalRender extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
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

export default ConditionalRender;
```

The defference from above example is we use a `message` variable for contain our element.

## Ternary Conditional Operator

```js
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
```

How to use Ternary is `Statements ? true : false`

## Short sircuit operator

```js
import React from "react";

class ConditionalRender extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    return this.state.isLoggedIn && <div>Welcome Roni</div>
  }
}

export default ConditionalRender;
```

So what happen here? The expression first evaluate the left side of the operator (`this.state.isLoggedIn`), if `true` the right side JSX will be rendered.
