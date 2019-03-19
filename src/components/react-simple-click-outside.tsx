import React from 'react';
import {IPropsClickOutside} from '../types/custom';

class ClickOutside extends React.Component<IPropsClickOutside> {
  private wrapperRef: React.RefObject<HTMLDivElement>;

  constructor(props: IPropsClickOutside) {
    super(props);
    this.wrapperRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('click', this._handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this._handleClickOutside);
  }

  _handleClickOutside = (event: any) => {
    if (
      this.wrapperRef.current &&
      !this.wrapperRef.current.contains(event.target)
    ) {
      if (this.props.target) {
        this.props.close(this.props.target);
      } else {
        this.props.close();
      }
    }
  };

  render() {
    return <div ref={this.wrapperRef}>{this.props.children}</div>;
  }
}

export default ClickOutside;
