# Props and State

Props are **arguments (params) passed into React components**. Props are passed to components **via HTML attributes**.

Send `name` props to Hello component:

```js
<Hello name="Fauzan" />
```

The Hello component receives the `name` argument as a props object:

```js
class Hello extends React.Component {
  render() {
    return <h2>Hello {this.props.name}!</h2>;
  }
}
```

## Pass Data

If you have a variable to send, and not a string as in the example above, you just **put the variable name inside curly brackets**:

```js
import React from "react";

class Hello extends React.Component {
  render() {
    return (
      <div>
        <h2>Hello {this.props.name}!</h2>
        <h4>
          Weight: {this.props.data.weight}, high: {this.props.data.high}
        </h4>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    const personName = "Fauzan"; // String
    const personData = { weight: 65, high: 185 }; // Object
    return (
      <div>
        <h1>Who is that?</h1>
        <Hello name={personName} data={personData} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
```

## Props in Functional Component

Previously we saw how to use props in the component class. Now we will see how the functional component does this. **Props can also be used repeatedly** because they are same as arguments:

**App component:**

```js
const App = () => {
  return (
    <div className="App">
      <Hero name="Raromi" />
      <Hero name="Lalisa" />
      <Hero name="Gembul" />
    </div>
  );
};

export default App;
```

**Hero component:**

```js
const Hero = (props) => {
  return <h1>Hello {props.name}</h1>;
};

export default Hero;
```

> The difference use of props in a class and functional components is that **the class uses the `this` keyword**, while **the functional uses params called `props` without `this` keyword**

## Children Props

As the name, children props are **the things inside the component that send props.**

**Class component:**

```js
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Hero name="Raromi">
          <p>This is children props</p> {/* Children Props */}
        </Hero>
        <Hero name="Lalisa" />
        <Hero name="Gembul" />
      </div>
    );
  }
}

class Hero extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        {this.props.children}
      </div>
    );
  }
}
```

**Functinal component:**

```js
const App = () => {
  return (
    <div className="App">
      <Hero name="Raromi">
        <p>This is children props</p> {/* Children Props */}
      </Hero>
      <Hero name="Lalisa" />
      <Hero name="Gembul" />
    </div>
  );
};

const Hero = (props) => {
  return (
    <div>
      <h1>Hello {props.name}</h1>
      {props.children}
    </div>
  );
};
```

> Props are **immutable** that means, they cant be changed or re-asign

## Props vs State

**Props** are:

* Props get passed to the component
* Like a function parameters
* Props are immutable
* To use props:
  * `props` - Functional Component
  * `this.props` - Class Component

**State** are:

* Manage within the component
* Like a variable declared in function body
* State can be changed
* To use state:
  * useState Hook - Functional Component
  * `this.state` - Class Component

**State in class component example:**

```js
import React from 'react'

class Message extends React.Component {
  constructor(){
    super()
    this.state = {
      message: "Welcome visitor"
    }
  }

  changeMessage() {
    this.setState({message: "Thank you for subscribing"})
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    )
  }
}

export default Message
```
