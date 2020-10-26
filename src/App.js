import React from 'react';

import './App.css';

import NewTodo from './components/new-todo/new-todo.component';
import TodoList from './components/todo-list/todo-list.component';

const App = () => (
  <>
    <div className='bg' />
    <NewTodo />
    <TodoList />
  </>
);

export default App;
