import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoContainer from './TodoContainer/TodoContainer';
import AddTodoForm from './AddTodoForm/AddTodoForm';

const App = () => 
  {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to the React TODO app.</h2>
        </div>
        <div>
          <TodoContainer /> 
          <AddTodoForm />
        </div>
      </div>
    );
  }

export default App;
