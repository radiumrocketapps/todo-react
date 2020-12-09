import React, { Component } from 'react';
import AddTodo from './components/AddTodo/AddTodo';
import TodoItem from './components/TodoItem/TodoItem';

class Todos extends Component {
  state = {
    todos: [{
      id: 456,
      title: 'Do laundry',
      completed: false
    }]
  }

  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })
  };

  addTodo = title => {
    const newTodo = {
      title,
      completed: false,
      id: Math.floor(Math.random() * 101)
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  };


  render() {
    return (
      <>
        <AddTodo addTodo={this.addTodo} />
        {
          this.state.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} markComplete={this.markComplete} delTodo={this.delTodo} />
          ))
        }
      </>
    )
  }
}

export default Todos;