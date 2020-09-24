import React from 'react';

import './todo-list.style.scss';

import CustomInput from '../custom-input/custom-input.component';
import CustomButton from '../custom-button/custom-button.component';
import Todo from '../todo/todo.component';

class TodoList extends React.Component {
  constructor() {
    super();

    this.state = {
      selectedTask: '',
      editedTask: '',
    };
  }

  handleEdit = (e) => {
    const taskToEdit = e.target.previousElementSibling.innerText;
    this.setState({ selectedTask: taskToEdit, editedTask: taskToEdit });
  };

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ editedTask: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { tasks } = this.props;
    tasks.forEach((task, index) => {
      if (task === this.state.selectedTask) {
        tasks[index] = this.state.editedTask;
      }
    });

    this.setState({ selectedTask: '', editedTask: '' });
  };

  render() {
    const { tasks } = this.props;
    return (
      <>
        <div className='todo-list'>
          <form onSubmit={this.handleSubmit}>
            <span className='edit'>Edit:</span>
            <CustomInput
              handleChange={this.handleChange}
              value={this.state.editedTask}
            />
            <CustomButton isSaveBtn>Save</CustomButton>
          </form>
        </div>
        {tasks.length ? (
          tasks.map((task) => (
            <Todo
              key={Math.round(Math.random() * 1000)}
              name={task}
              handleDelete={this.props.handleDelete}
              handleEdit={this.handleEdit}
            />
          ))
        ) : (
          <div className='empty-msg'>No remaining tasks.</div>
        )}
      </>
    );
  }
}

export default TodoList;
