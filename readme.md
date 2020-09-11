Installation/Setup
-
**Base Setup**
Clone the repo into a local directory. \
Navigate into the directory and run the following from your favorite terminal:
```shell script
npm install
```
A `.eslintrc.js` and `.eslintignore` file are both provided for code linting. 

Running Locally
-
Local development
```shell script
npm run start
```

For hosting on an external server:
```shell script
npm run build
```
This will out put to `/dist` and can be hosted using your server of choice.

JavaScript Basics
-

Variables can be declared in a couple of ways
```js
// Use const for variables whose value will not change
const myConstantNumber = 123;
const myConstantString = "Hello world";

// Use let for variables whose value will change
let myNumber = 123;
let myString = "Hello world";

myNumber = 234;
myString = "New string";
```

Functions can be declared in a couple of different ways.
```js
// This is a "normal" function
function MyAddFunction(a, b) {
  return a + b;
}

// This is called an "arrow" function
const MyAddArrowFunction = (a,b) => {
  return a + b;
}
```

Objects are a core aspect of JavaScript programming.
```js
const myObject = {
  name: "Dave",
  age: 34,
  email: "dave@gmail.com"
}

console.log(myObject.email) // Output: dave@gmail.com
```

Boolean operators
```js
// && -> things to the right of this will only happen if the left side is true
const myTrueValue = true && "Jim";
const myFalseValue = false && "Jim";

console.log(myTrueValue) // Jim
console.log(myFalseValue) // false
```

```js
// || -> things to the right of this will only happen if the left side is false
const myTrueValue = true || "Jim";
const myFalseValue = false || "Jim";

console.log(myTrueValue) // true
console.log(myFalseValue) // Jim
```

With the new version of JavaScript (ES6) there are some important new syntax features.

Destructuring - allows you to easily assign variables from objects.
```js
// Old Way
const myObject = {
  name: "Dave",
  age: 34,
  email: "dave@gmail.com"
}

const email = myObject.email;
console.log(email) // Output: dave@gmail.com
```

```js
// New Way
const myObject = {
  name: "Dave",
  age: 34,
  email: "dave@gmail.com"
}

// Notice the curly brackets here
const { email } = myObject;
console.log(email) // Output: dave@gmail.com
```

Spread operator - allows you to interact with arrays in a cool new way.
```js
/// Without spread operator
const arr = [1,2,3,4];

console.log(arr) // Output: [1,2,3,4]
```

```js
// Without spread operator
const arr = [1,2,3,4];

// Notice the triple dots here
console.log(...arr) // Output: 1,2,3,4
```

React Basics
-

React uses JavaScript functions that return html and react components.
The most basic React component could be a function that returns a div with some text.
```jsx
// basic-component.js
import React from 'react';

const BasicComponent = () => {
  return (
    <div>
      Lorem ipsum unum dolor.
    </div>
  );
};

export default BasicComponent;
```  

The line at the bottom is necessary if you want to use your component from other files.

This component could be used from within other React components like this:
```jsx
// component-two.js
import React from 'react';
import BasicComponent from './basic-component';

const ComponentTwo = () => {
    return (
      <div>
        <h1>
          This is a random header.
        </h1>
        <BasicComponent />
      </div>
    );
};

export default ComponentTwo;
```

Destructuring in React

Destructuring is used with React components to set up attributes.

```jsx
// component-two.js
import React from 'react';
import BasicComponent from './basic-component';

// Notice the curly brackets where the function arguments go.
const ComponentTwo = ({ header }) => {
    return (
      <div> 
        <h1>
          {header}
        </h1>
        <BasicComponent />
      </div>
    );
};

// Usage: <ComponentTwo header={'Header Text Goes Here'} />

export default ComponentTwo;
```

Boolean operators can be used to check if an attribute has a value before trying to use it.

```jsx
// component-two.js
import React from 'react';
import BasicComponent from './basic-component';

// Notice the curly brackets where the function arguments go.
const ComponentTwo = ({ header }) => {
    return (
      <div> 
        {
          header && 
            <h1>
              {header}
            </h1>
        }
        <BasicComponent />
      </div>
    );
};

// Usage: <ComponentTwo header={'Header Text Goes Here'} />

export default ComponentTwo;
```

Styled Components
-
The documentation for styled components can be found [here](https://styled-components.com/docs).

Styled components lets us style our components using normal css just like we would in an html project.
The main difference is that styled components can use other react components as their basis.

Styled components in the following manner:
```jsx
const ComponentName = styled.element`CSSGoesHere`
```

Here is an example of some component declarations:
```jsx
const HeaderOne = styled.h1`
  font-size: 32px;
  font-weight: 700;
`;

const HeaderTwo = styled.h2`
    font-size: 28px;
    font-weight: 700;
`;
```

These components could be used like this:
```jsx
// my-component.js
import React from 'react';
import styled from 'styled-components';

const MyComponent = () => {
    return  (
        <div>
            <HeaderOne>
                First header
            </HeaderOne>
            <HeaderTwo>
                Second header
            </HeaderTwo>
        </div>
    ) 
};

const HeaderOne = styled.h1`
  font-size: 32px;
  font-weight: 700;
`;

const HeaderTwo = styled.h2`
    font-size: 28px;
    font-weight: 700;
`;

export default MyComponent;
```

To make a styled component out of another React (or another styled component), use the following syntax

```jsx
// my-styled-component.js
import React from 'react';
import styled from 'styled-components';
import MyComponent from './my-component';

const MyStyledComponent = styled(MyComponent)`
  border: 2px solid #000;
  border-radius: 15px
`;

export default MyStyledComponent;
```

This component can be used inside other React components
```jsx
// outer-component.js
import React from 'react';
import MyStyledComponent from './my-styled-component';

const OuterComponent = () => {
  return (
    <div>
      <h1>
        Just a sample header.
      </h1>
      <MyStyledComponent />
    </div>
  );
}

export default OuterComponent;
```






 


