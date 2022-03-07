import React, { Component } from "react";
import "./ListTasks.css";

export class ListTasks extends Component {
  //   const tasks = this.props.tasks.map((task, index) => {
  //   <div key ={index}>{task.taskName}</div>
  // });

  render() {
    return (
      <div>
        <div className="to-do">
          <div className="title">Tasks to Do</div>
          {this.props.tasks.map((task, index) => {
            return (
              <div className="task" key={index}>
                <input className="update" type="checkbox" />
                <div>{task.taskName}</div>
                <input className="delete" type="checkbox" />
              </div>
            );
          })}
        </div>
        <div className="to-do">
          <div className="title">Completed Tasks</div>
        </div>
      </div>
    );
  }
}
