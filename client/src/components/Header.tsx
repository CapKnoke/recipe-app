import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useAppDispatch } from '../state/hooks';
import { getOneRandomRecipe } from '../state/actions/recipesActions';
import loginIcon from '../assets/icons/login.svg';

const Header = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    document.getElementById('randomButton')?.addEventListener('click', () => {
      dispatch(getOneRandomRecipe());
    })
  }, []);
  return (
    <header className='header'>
      <nav className='navbar'>
        <section className='navbar-left'>
          <section className='title-container'>
            <h1 className='title-container__title'>Reciply 🥘</h1>
          </section>
        </section>
        <section className='navbar-center'>
          <ul className='nav-links'>
            <NavLink to={'/'} className='nav-links__link' >Home</NavLink>
            <NavLink to={'/recipes'} className='nav-links__link' >Recipes</NavLink>
            <NavLink to={'/recipes/random'} id='randomButton' className='nav-links__link' >Random</NavLink>
            <NavLink to={'/about'} className='nav-links__link' >About</NavLink>
          </ul>
        </section>
        <section className='navbar-right'>
          <form className='login-form' action=''>
            <input className='login-form__field' type="text" name="username" id="loginFormTextField" placeholder='Username' />
            <button className='login-form__button' type='submit'><img className='login-form__button--img' src={loginIcon} alt="Sign in" /></button>
          </form>
        </section>
      </nav>
    </header>
  )
}

export default Header;