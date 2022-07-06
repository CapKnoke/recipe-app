import React, { useEffect, useState } from 'react';
import './App.scss';

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
    <main className="App">
      <h1>{connected}</h1>
    </main>
  );
}

export default App;
