import React, { useState } from 'react';
import { connect } from 'react-redux';

import './new-todo.style.scss';

import { editTask } from '../../redux/todo/todo.action';

import CustomInput from '../custom-input/custom-input.component';
import CustomButton from '../custom-button/custom-button.component';

const NewTodo = ({ editTask }) => {
  const [currentTask, setCurrentTask] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setCurrentTask(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentTask.trim()) {
      editTask(currentTask);

      setCurrentTask('');
    } else {
      alert('Enter a new Task!');
    }
  };

  return (
    <div className='new-todo'>
      <p className='title'>New Todo:</p>
      <form className='form' onSubmit={handleSubmit}>
        <CustomInput
          type='text'
          value={currentTask}
          handleChange={handleChange}
        />
        <CustomButton>Add</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  editTask: (task) => dispatch(editTask(task)),
});

export default connect(null, mapDispatchToProps)(NewTodo);
