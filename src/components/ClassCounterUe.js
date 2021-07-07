import React, { Component } from "react";

export default class ClassCounterUe extends Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }
  componentDidUpdate() {
    document.title = `Clicked ${this.state.count} times`;
  }
  render() {
    // document.title = `Clicked ${this.state.count} times`;

    return (
      <div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Clicked {this.state.count} times
        </button>
      </div>
    );
  }
}
