# React Props

![](https://i.ytimg.com/vi/GIU8ekYndKw/maxresdefault.jpg)

## Overview

In this lesson, we'll learn how to utilize `properties` or `props` for short to create reusable elements in React. `Props` allow our components to change dymanically based on information that we provide in a quite familiar syntax!

## Getting Started

- Fork and Clone
- `npm install`
- `npm start`

## What are `props`?

[Cem Eygi (medium.com)](https://itnext.io/what-is-props-and-how-to-use-it-in-react-da307f500da0)

> “Props” is a special keyword in React, which stands for properties and is being used for passing data from one component to another.
> But the important part here is that data with props are being passed in a uni-directional flow. (one way from parent to child)
> Furthermore, props data is read-only, which means that data coming from the parent should not be changed by child components.

In short, `props` are pieces of information that we can provide to any component in a `downward` direction (We'll talk about this shortly). `Props` can be any information we want whether that be `strings`, `objects`, `arrays` or `functions`.

## Prop Syntax

`Props` follow a very simple convention:

<div>
    <img src="https://sei-r.s3.amazonaws.com/u2_lesson_react_props/prop-structure.png" style="height:250px;" alt="prop structure"/>
</div>

<div>
    <img src="https://sei-r.s3.amazonaws.com/u2_lesson_react_props/prop-variable.png" style="height:250px;" alt="prop with variable"/>
</div>

The name of the prop, is defined very similarly to an HTML attribute. We can set the value a couple of different ways:

- If you're using just a normal data type like a string, we can pass the props value in quotes.
- If you're using some variable or function, we use the `{}` syntax to tell react that this value is some kind of javascript.

Let's try this for ourselves. In `App.js`, import the provided `Button` component from the `components` folder:

```js
import Button from './components/Button'
```

Next we'll add this button to our markup like so:

```jsx
<div>
  <Button />
</div>
```

Here's where things get interesting, provide a `prop` to the `Button` component with a name of `text` and a value of `Awesome Button`:

```jsx
<div>
  <Button text="Awesome Button" />
</div>
```

Take a look at your browser you should see the following:

<div>
<img src="https://sei-r.s3.amazonaws.com/u2_lesson_react_props/button-no-prop.png" alt="button-no-prop"/>
</div>

Hmm interesting... It looks like our button is still showing click me. Let's see why!

Open the `Button.js` file located in the `components` folder, you should see the following:

```jsx
import React from 'react'

function Button() {
  return <button>Click Me</button>
}

export default Button
```

Well this looks like a basic button, theres nothing special here! Let's change that...

In order for a component to have the ability to read `props`, we must tell the component to be aware of them. To accomplish this, add `props` to the `Button` function as an argument:

```js
import React from 'react'

function Button(props) {
  return <button>Click Me</button>
}

export default Button
```

Let's add a `console.log` to see what exactly is `props`:

```jsx
import React from 'react'

function Button(props) {
  console.log(props)
  return <button>Click Me</button>
}

export default Button
```

You should see the following in your console:

<div>
    <img src="https://sei-r.s3.amazonaws.com/u2_lesson_react_props/button-props-log.png" alt="button-props-log"/>
</div>

Let's talk about what happened here:

- When we provide `props` to a component like we did in `App.js`, React takes that `prop name` and `prop value` and turns them into an object.
- It interprets the `prop name` as the key
- It interprets the `prop value` as the value for the desired key.
- As we add more props, React will continuously add them to the `props` object as long as we don't pass in duplicate names/keys.

So if `props` is an object, how can we access the information we provided? Let's find out.

In `Button.js`, let's replace the current button text of `Click Me` with `{props.text}`:

```jsx
import React from 'react'

function Button(props) {
  console.log(props)
  return <button>{props.text}</button>
}

export default Button
```

Take a look at your browser and notice what the text inside of the button contains:

<div>
    <img src="https://sei-r.s3.amazonaws.com/u2_lesson_react_props/button-with-props.png" alt="button-with-props"/>
</div>

We'll talk about what role the `{}` syntax has in React in the next section.

## React Dynamic Props and Data
