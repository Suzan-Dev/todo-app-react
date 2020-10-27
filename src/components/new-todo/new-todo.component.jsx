import React, { useState, useContext } from 'react';

import './new-todo.style.scss';

import CustomInput from '../custom-input/custom-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { TodoAppContext } from '../../contexts/todo-app.context';

const NewTodo = () => {
  const [currentTask, setCurrentTask] = useState('');
  const { maintainTask } = useContext(TodoAppContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setCurrentTask(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentTask.trim()) {
      maintainTask(currentTask);

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

export default NewTodo;
