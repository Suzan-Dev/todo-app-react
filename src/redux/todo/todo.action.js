import todoActionTypes from './todo.type';

export const deleteTask = (event) => ({
  type: todoActionTypes.DELETE_TASK,
  payload: event,
});

export const editTask = (task) => ({
  type: todoActionTypes.ADD_TASK,
  payload: task,
});
