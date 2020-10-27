import React from 'react';
import { connect } from 'react-redux';

import './todo.style.scss';

import { deleteTask } from '../../redux/todo/todo.action';

const Todo = ({ name, handleEdit, deleteTask }) => {
  return (
    <div className='todo-container'>
      <input type='checkbox' />
      <span className='text'>{name}</span>
      <i className='fas fa-pencil-alt' onClick={handleEdit}></i>
      <i className='fas fa-trash-alt' onClick={deleteTask}></i>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteTask: (event) => dispatch(deleteTask(event)),
});

export default connect(null, mapDispatchToProps)(Todo);
