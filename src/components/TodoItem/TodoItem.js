import React, { Component } from "react";
import './TodoItem.css'

export class TodoItem extends Component {
  componentDidMount = (props) => {
    console.log(this.props.todo);
  };

  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    }
  }
  
  handleComplete = () => this.props.markComplete(this.props.todo.id)
  
  handleDelete = () => this.props.delTodo(this.props.todo.id)

  render() {
    const { title, completed } = this.props.todo;
    return (
      <div className="todo-item" style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            defaultChecked={completed}
            onChange={this.handleComplete}
          />{" "}
          {title}
          <button onClick={this.handleDelete} className="delete-btn">
            x
          </button>
        </p>
      </div>
    );
  }
}

export default TodoItem;
