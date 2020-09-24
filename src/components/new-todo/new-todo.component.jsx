import React from 'react';

import './new-todo.style.scss';

import CustomInput from '../custom-input/custom-input.component';
import CustomButton from '../custom-button/custom-button.component';

class NewTodo extends React.Component {
  constructor() {
    super();

    this.state = {
      currentTask: '',
    };
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ currentTask: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { handleState } = this.props;
    const { currentTask } = this.state;

    if (currentTask.trim()) {
      handleState(currentTask);

      this.setState({ currentTask: '' });
    } else {
      alert('Enter a new Task!');
    }
  };

  render() {
    return (
      <div className='new-todo'>
        <p className='title'>New Todo:</p>
        <form className='form' onSubmit={this.handleSubmit}>
          <CustomInput
            type='text'
            value={this.state.currentTask}
            handleChange={this.handleChange}
          />
          <CustomButton>Add</CustomButton>
        </form>
      </div>
    );
  }
}

export default NewTodo;
