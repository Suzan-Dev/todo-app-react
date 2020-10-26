import React, { useState, createContext } from 'react';

import { removeTask, handleTask } from './utils.context';

export const TodoAppContext = createContext({
  tasks: [],
  deleteTask: () => {},
  maintainTask: () => {},
});

export const TodoAppProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const deleteTask = (e) => setTasks(removeTask(tasks, e));
  const maintainTask = (task) => setTasks(handleTask(tasks, task));

  return (
    <TodoAppContext.Provider
      value={{
        tasks,
        deleteTask,
        maintainTask,
      }}
    >
      {children}
    </TodoAppContext.Provider>
  );
};
