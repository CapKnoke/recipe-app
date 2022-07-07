import React from 'react';
import {
  Outlet
} from 'react-router-dom';
import './App.scss';
import Header from './components/Header';

const App = () => {
  return (
    <main className="App">
      <Header />
      <Outlet />
    </main>
  );
};

export default App;
