import React from 'react';

import './todo.style.scss';

const Todo = ({ name, handleDelete, handleEdit }) => (
  <div className='todo-container'>
    <input type='checkbox' />
    <span className='text'>{name}</span>
    <i className='fas fa-pencil-alt' onClick={handleEdit}></i>
    <i className='fas fa-trash-alt' onClick={handleDelete}></i>
  </div>
);

export default Todo;
