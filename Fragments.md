# Fragments

In JSX, the HTML code must be wrapped in ONE top level element. So if you like to write two headers, you must put them inside a parent element, like a `<div>` element. But, `<div>` could add another nodes to DOM. Fragments basically let us to **group a list of children elements without adding extra nodes to the DOM**. Lets check it out!

**This is wrapped with `<div>`:**

```js
const Fragments = () => {
  return (
    <div>
      <h1>Fragment Demo</h1>
      <p>This describes the fragment demo component</p>
    </div>
  );
};

export default Fragments;
```

![img](./img/1-min.png)

**This is wrapped with Fragment:**

```js
import React from 'react'

const Fragments = () => {
    return (
        <React.Fragment>
            <h1>Fragment Demo</h1>
            <p>This describes the fragment demo component</p>
        </React.Fragment>
    )
}

export default Fragments
```

![img](./img/2-min.png)

> We also can use `<>` and closing with `</>` instead of `<React.Fragment>`
