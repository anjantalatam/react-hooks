import React, { Component } from "react";

export default class IntervalClassCounter extends Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    console.log("Mounted");
    this.interval = setInterval(this.tick, 1000);
  }
  componentWillUnmount() {
    console.log("Unmounted");
    clearInterval(this.interval);
  }
  tick = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
      </div>
    );
  }
}
