# React-Simple-Click-Outside

### [Demo](https://mattdamon108.github.io/react-simple-click-outside/)

This is the tiny and simple click outside handler which enables your target component(or element) to listen click events outside of itself.

This module can help you to make such as drop-down menu, modal, popover, tooltip easily.

### Features

1. Listen click events of outside area.
2. Typescript compatibility.

### Install

```shell
$ npm i react-simple-click-outside

# or

$ yarn add react-simple-click-outside
```

### Example

```javascript
import React from "react";
import ReactDOM from "react-dom";
import ClickOutside from "react-simple-click-outside";

class Example extends React.Component {
  state = {
    isOpen: false
  };

  _toggle = () => {
    this.setState(prevState => {
      return { isOpen: !prevState.isOpen };
    });
  };

  _close = target => {
    this.setState({
      [target]: false
    });
  };

  render() {
    const { isOpen } = this.state;
    return (
      <>
        <ClickOutside close={this._close} target="isOpen">
          <div>
            <button onClick={this._toggle}>Toggle</button>
            {isOpen ? <div>Hi~</div> : null}
          </div>
        </ClickOutside>
      </>
    );
  }
}

ReactDOM.render(<Example />, document.getElementById("root"));
```

### Props

| Props  | Required | Type     | Default   | Descriptioin                                                                                                    |
| ------ | -------- | -------- | --------- | --------------------------------------------------------------------------------------------------------------- |
| close  | Yes      | function | undefined | The function to close the target component or element                                                           |
| target | No       | string   | undefined | The target(eg. `this.state.isOpen`) which the `close` function will work on. It will be args of close function. |