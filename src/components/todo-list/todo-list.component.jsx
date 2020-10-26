import React, { useState, useContext } from 'react';

import './todo-list.style.scss';

import CustomInput from '../custom-input/custom-input.component';
import CustomButton from '../custom-button/custom-button.component';
import Todo from '../todo/todo.component';

import { TodoAppContext } from '../../contexts/todo-app.context';

const TodoList = () => {
  const [mutatedTask, setMutatedTask] = useState({
    selectedTask: '',
    editedTask: '',
  });
  const { deleteTask, tasks } = useContext(TodoAppContext);

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

export default TodoList;
