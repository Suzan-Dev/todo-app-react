import React, { useContext } from 'react';

import './todo.style.scss';

import { TodoAppContext } from '../../contexts/todo-app.context';

const Todo = ({ name, handleEdit }) => {
  const { deleteTask } = useContext(TodoAppContext);

  return (
    <div className='todo-container'>
      <input type='checkbox' />
      <span className='text'>{name}</span>
      <i className='fas fa-pencil-alt' onClick={handleEdit}></i>
      <i className='fas fa-trash-alt' onClick={deleteTask}></i>
    </div>
  );
};

export default Todo;
