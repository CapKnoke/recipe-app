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
      <section className='main-content'>
        <Outlet />
      </section>
    </main>
  );
};

export default App;
