import React, { Component } from "react";
import "./App.css";
import { CreateTask } from "./components/CreateTask";
import { ListTasks } from "./components/ListTasks";

let tasksArray = [];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: tasksArray,
    };
    this.createTask = this.createTask.bind(this);
  }

  createTask(task) {
    console.log(`task: ${task}`);
    tasksArray.push({ taskName: task, completed: false });
    this.setState({ task: tasksArray });
  }

  render() {
    return (
      <div>
        <h1>What to do...?</h1>
        <div>
          <CreateTask createTask={this.createTask} />
          <ListTasks tasks={this.state.task} />
        </div>
      </div>
    );
  }
}
export default App;
