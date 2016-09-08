# React Calculator 

Tonight you will be building a calculator with React. At first your calculator will just add 2 numbers together when they are typed in. For the bonus, we might get more creative.

### Set Up
You have been provided with a static html page `calc.html` that already includes babel and react. You simply need to add your react code inside the script tags in the file and open in the browser.

### Steps

1. Start by creating your a single component and mounting it with some sample text in it. Maybe you'll call it Calculator:
  ```js
  class Calculator extends React.Component {
    render() {
      return (<div>Hello World!</div>);
    }
  };
  
  ReactDOM.render(<Calculator />, document.getElementById('container'));
  ```

2. Port the relevant HTML code that already exists into JSX in your `render` method. At this point the page should look identical to how it started, except now we're rendering it with React.
3. Set up the initial state of your component. What state will you need to track? What values should those state items start with? Where is that state printed to the browser?
4. You will need to figure out how and when you want to listen for an event to trigger a calculation. Is it a click event, a submit event...? It's up to you to figure out what event you want to listen for, on which elements, and why. Here is a [list of events React supports](https://facebook.github.io/react/docs/events.html#supported-events) and [how to listen for them](https://facebook.github.io/react/docs/interactivity-and-dynamic-uis.html).
5. Once you know what event to listen for, you'll need to create a method that accepts the triggered event, gets the input values from your form, adds them together, and sets the state of the new `sum`.
    - **thought**: how will you handle inputs that aren't numbers?
6. Once the state of the `sum` has been set, React will re-render the whole component. Make sure you have a place in your JSX that displays the result!

### Bonus

- Make the calculator work with any of the 4 basic arithmetic operations (+, -, *, /). How will this change your state, and your JSX?

## Licensing
All content is licensed under a CC­BY­NC­SA 4.0 license.
All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
