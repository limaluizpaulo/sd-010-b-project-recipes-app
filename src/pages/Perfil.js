import React, { useState } from 'react';
import { Redirect } from 'react-router';

import './style/Perfil.css';

function Perfil() {
  const user = localStorage.getItem('user');
  const [goDoneRecipes, setGoDoneRecipes] = useState(false);
  const [goFavoriteRecipes, setGoFavoriteRecipes] = useState(false);
  const [logoff, setLogoff] = useState(false);
  console.log(user);

  return (
    <div className="Perfil">
      { goDoneRecipes && <Redirect to="/receitas-feitas" /> }
      { goFavoriteRecipes && <Redirect to="/receitas-favoritas" /> }
      { logoff && <Redirect to="/" /> }

      <h1 data-testid="profile-email">
        email
      </h1>

      <button
        type="button"
        data-testid="profile-done-btn"
        onClick={ () => setGoDoneRecipes(true) }
      >
        Receitas Feitas
      </button>

      <button
        type="button"
        data-testid="profile-favorite-btn"
        onClick={ () => setGoFavoriteRecipes(true) }
      >
        Receitas Favoritas
      </button>

      <button
        type="button"
        data-testid="profile-logout-btn"
        onClick={ () => setLogoff(true) }
      >
        Sair
      </button>
    </div>
  );
}
export default Perfil;
