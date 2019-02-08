import React from "react";
import ReactDOM from "react-dom";
import ClickOutside from "../../src";
import "./static/index.css";

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
      <div className="container">
        <ClickOutside close={this._close} target="isOpen">
          <div className="dropdown-container">
            <button className="dropdown-button" onClick={this._toggle}>
              Toggle
            </button>
            {isOpen ? (
              <div className="dropdown-menu">
                <div className="dropdown-menu-item">React</div>
                <div className="dropdown-menu-item">Vue</div>
                <div className="dropdown-menu-item">Angular</div>
              </div>
            ) : null}
          </div>
        </ClickOutside>
        <div className="description">
          <div className="description-item">1. Click the 'Toggle' button</div>
          <div className="description-item">
            2. Click the outside area against pop-up dropdown menu
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Example />, document.getElementById("root"));
