import React, { Component } from "react";

class ClassMouse extends Component {
  state = {
    x: 0,
    y: 0,
    display: true,
  };

  getCoordinates = (e) => {
    console.log("event listener");
    this.setState({ x: e.clientX, y: e.clientY });
  };
  componentDidMount() {
    console.log("Adding event listener");
    window.addEventListener("mousemove", this.getCoordinates);
  }
  componentWillUnmount() {
    console.log("unmounted");
    window.removeEventListener("mousemove", this.getCoordinates);
  }

  render() {
    return (
      <div>
        <h2>
          X - {this.state.x} Y - {this.state.y}
        </h2>
      </div>
    );
  }
}

export default ClassMouse;
