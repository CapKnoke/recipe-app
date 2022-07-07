import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {  BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './state/store';
import './index.scss';
import App from './App';
import Home from './routes/home/Home';
import Recipes from './routes/recipes/Recipes';
import Search from './routes/search/Search';
import Recipe from './routes/recipe/Recipe';
import Overview from './routes/overview/Overview';
import About from './routes/about/About';
import Random from './routes/random/Random';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} >
            <Route path="about" element={<About />} />
            <Route index element={<Home />} />
            <Route path="recipes" element={<Recipes />} >
              <Route path="search" element={<Search />} />
              <Route path=":id" element={<Recipe />} />
              <Route path="random" element={<Random />} />
              <Route index element={<Overview />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
