import React from 'react';

import './App.css';

import NewTodo from './components/new-todo/new-todo.component';
import TodoList from './components/todo-list/todo-list.component';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      tasks: [],
    };
  }

  handleState = (task) => {
    this.setState({ tasks: this.state.tasks.concat([task]) });
  };

  handleDelete = (e) => {
    const taskName =
      e.target.previousElementSibling.previousElementSibling.innerText;
    this.setState({
      tasks: this.state.tasks.filter((task) => task !== taskName),
    });
  };

  render() {
    const { tasks } = this.state;
    return (
      <>
        <div className='bg' />
        <NewTodo handleState={this.handleState} />
        <TodoList tasks={tasks} handleDelete={this.handleDelete} />
      </>
    );
  }
}

export default App;
