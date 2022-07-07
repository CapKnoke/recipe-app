import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <nav className='navbar'>
        <section className='navbar-left'>
          <section className='title-container'>
            <h1 className='title-container__title'>Reciply🥘</h1>
          </section>
        </section>
        <section className='navbar-center'>
          <ul className='nav-links'>
            <NavLink to={'/'} className='nav-links__link' >Home</NavLink>
            <NavLink to={'/recipes'} className='nav-links__link' >Recipes</NavLink>
            <NavLink to={'/recipes/random'} className='nav-links__link' >Suprise Me</NavLink>
            <NavLink to={'/about'} className='nav-links__link' >About</NavLink>
          </ul>
        </section>
        <section className='navbar-right'>
          <form className='login-form' action=''>
            <input type="text" name="username" id="loginFormTextField" />
            <button type='submit'>Sign In</button>
          </form>
        </section>
      </nav>
    </header>
  )
}

export default Header;