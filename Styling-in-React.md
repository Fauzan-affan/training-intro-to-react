# Styling in React

There are many ways to style React with CSS, in this training we'll focus on three:

1. CSS stylesheet
2. Inline styling
3. CSS Modules

## CSS Stylesheet

You can write your CSS styling in a separate file, just save the file with the `.css` file extension, and import it in your application.

First of all we need to create **styles.css** file and import to main component:

```css
.primary {
    color: brown;
}
```

Then create some component like Styles.js. **Do not forget to import to main component too**:

```js
const Styles = () => {
    return (
        <div className="primary">Styled Element</div>
    )
}

export default Styles
```

### Stylesheet with Props

You can control your stylesheet `true` or `false` with props. If `true` styling applied vice versa.

Add more style on styles.css:

```css
.primary {
    color: brown;
}

.text-xl {
    font-size: 100px;
}
```

Add props to Styles.js inside App.js:

```js
<Styles textXl={true} />
```

Change Styles.js:

```js
const Styles = (props) => {
    let textXl = props.textXl ? "text-xl" : ""
    return (
        <div className={`primary ${textXl}`}>Styled Element</div>
    )
}

export default Styles
```

## Inline Styling

To style an element with the inline style attribute, the value must be a JavaScript object. We do not need `.css` file if we use inline styling. There are three basic rules for using inline styles:

1. Double curly braces
2. camelCased property name
3. Javascript object

### Double Curly Braces

In JSX, JavaScript expressions are written inside curly braces, and since JavaScript objects also use curly braces, the styling is written inside two sets of curly braces `{{}}`.

```js
const InlineStyle = () => {
    return (
        <div style={{color: "red"}}>Inline Styling Component</div>
    )
}

export default InlineStyle
```

### camelCased Property Name

Since the inline CSS is written in a JavaScript object, properties with two names, like `background-color`, must be written with camel case syntax:

```js
const InlineStyle = () => {
    return (
        <div style={{backgroundColor: "red"}}>Inline Styling Component</div>
    )
}

export default InlineStyle
```

> You can add more attributes but **separate them with commas `,`**

### Javascript Object

We can also create an object with styling information, and refer to it in the style attribute:

```js
const InlineStyle = () => {
    const title = {
        fontSize: "100px",
        color: "brown"
    }

    return (
        <div style={title}>Inline Styling Component</div>
    )
}

export default InlineStyle
```

## CSS Modules

If we want to limit the use of css to certain components, we can use modules. So that the **css we have can only be used in components that import modules only** and there is no need to be afraid of class or id name conflicts.

Create a css and named it `styles.module.css` and type some style inside:

```css
.success {
    color: brown;
    font-size: "100px";
}
```

Create new component and import the module:

```js
import styles from "../Styles/styles.module.css"

const ModuleStyle = () => {
    return (
        <h1 className={styles.success}>Success</h1>
    )
}

export default ModuleStyle
```

> Remember, we cant using `styles.module.css` outside ModuleStyle component
