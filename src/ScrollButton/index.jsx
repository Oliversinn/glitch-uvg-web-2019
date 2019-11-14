/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import './style.css';

export default class ScrollButton extends Component {
  constructor() {
    super();
    this.state = {
      section: 1,
    };
    this.click = this.click.bind(this);
  }

  click() {
    if (this.state.section < 4) {
      window.scrollTo(0, this.state.section * 500);

      this.setState({
        section: this.state.section + 1
      });
    }
  }

  render() {
    return (
      <div className="button" onClick={this.click}>
        <div className="arrow" />
      </div>
    );
  }
}
