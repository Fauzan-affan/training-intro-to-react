# JSX

Javascript XML (JSX) allows us to write HTML in React, makes it easier to write and add HTML in React. JSX allows us to write HTML elements in JavaScript and place them in the DOM **without any `createElement()`  and/or `appendChild()`** methods.

JSX converts HTML tags into react elements.

> You are not required to use JSX, but **JSX makes it easier to write React applications**. JSX tags have a tag name, attributes, and children.

Using `createElement()`:

```js
import React from 'react'

const Hello = () => {
    return React.createElement(
        'div',
        null,
        React.createElement('h1', null, 'Hello Gengs')
    )
}

export default Hello

```

Using JSX:

```js
import react from 'react'

const Hello = () => {
    return (
        <div>
            <h1>Hello Gengs</h1>
        </div>
    )
}

export default Hello

```
