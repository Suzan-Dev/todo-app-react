import React, { useState } from 'react';
import { connect } from 'react-redux';

import { deleteTask } from '../../redux/todo/todo.action';

import './todo-list.style.scss';

import CustomInput from '../custom-input/custom-input.component';
import CustomButton from '../custom-button/custom-button.component';
import Todo from '../todo/todo.component';

const TodoList = ({ tasks, deleteTask }) => {
  const [mutatedTask, setMutatedTask] = useState({
    selectedTask: '',
    editedTask: '',
  });

  const { selectedTask, editedTask } = mutatedTask;

  const handleEdit = (e) => {
    const taskToEdit = e.target.previousElementSibling.innerText;
    setMutatedTask({ selectedTask: taskToEdit, editedTask: taskToEdit });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setMutatedTask({ ...mutatedTask, editedTask: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    tasks.forEach((task, index) => {
      if (task === selectedTask) {
        tasks[index] = editedTask;
      }
    });

    setMutatedTask({ selectedTask: '', editedTask: '' });
  };
  return (
    <>
      <div className='todo-list'>
        <form onSubmit={handleSubmit}>
          <span className='edit'>Edit:</span>
          <CustomInput handleChange={handleChange} value={editedTask} />
          <CustomButton isSaveBtn>Save</CustomButton>
        </form>
      </div>
      {tasks.length ? (
        tasks.map((task) => (
          <Todo
            key={Math.round(Math.random() * 1000)}
            name={task}
            handleDelete={deleteTask}
            handleEdit={handleEdit}
          />
        ))
      ) : (
        <div className='empty-msg'>No remaining tasks.</div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.todo.tasks,
});

const mapDispatchToProps = (dispatch) => ({
  deleteTask: (task) => dispatch(deleteTask(task)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
