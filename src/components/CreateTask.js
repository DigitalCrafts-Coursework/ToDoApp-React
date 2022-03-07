import React, { Component } from "react";

export class CreateTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.inputBox = React.createRef();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ task: this.inputBox.current.value });
    this.props.createTask(this.state.task);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className="input-box"
          type="text"
          ref={this.inputBox}
          placeholder="Enter Task"
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}
