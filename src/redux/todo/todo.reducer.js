import todoActionTypes from './todo.type';

import { removeTask, editTask } from './todo.utils';

const INITIAL_STATE = {
  tasks: [],
};

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case todoActionTypes.DELETE_TASK:
      return {
        ...state,
        tasks: removeTask(state.tasks, action.payload),
      };
    case todoActionTypes.ADD_TASK:
      return {
        ...state,
        tasks: editTask(state.tasks, action.payload),
      };
    default:
      return state;
  }
};

export default todoReducer;
