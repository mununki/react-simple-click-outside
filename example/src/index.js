import React from "react";
import ReactDOM from "react-dom";
import ClickOutside from "../../src";

class Example extends React.Component {
  state = {
    isOpen: false
  };

  _toggle = () => {
    this.setState(prevState => {
      return { isOpen: !prevState.isOpen };
    });
  };

  _close = () => {
    this.setState({
      isOpen: false
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
