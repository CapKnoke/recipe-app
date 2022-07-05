import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [connected, setConnected] = useState(null);
  const fetchData = async (): Promise<void> => {
    const response = await fetch('/api/recipes')
      .then(res => res.json())
      .catch(err => console.log(err));
    setConnected(response.message);
  };
  useEffect(() => {
    fetchData();
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
      <p>{connected}</p>
    </div>
  );
}

export default App;
