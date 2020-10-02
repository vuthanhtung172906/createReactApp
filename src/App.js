import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TodoItem title = "Đi nấu cơm "/>
        <TodoItem  title = "Đi ỉa "/>
        <TodoItem title = "Đi đá phò "/>
        <TodoItem title ="Đi dạo "/>

        <p>
          Edit <code>src/App.js</code> and save to reloaddddd.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
