import React from 'react';
import { useHistory } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Profile() {
  const history = useHistory();

  function handeClickLogOut() {
    localStorage.clear();
    history.push('/');
  }

  // const email = localStorage.getItem('user', 'value').split('"')[3];
  return (
    <div>
      <Header title="Perfil" display="false" />
      <p data-testid="profile-email">{' '}</p>
      <button
        type="button"
        data-testid="profile-done-btn"
        onClick={ () => history.push('/receitas-feitas') }
      >
        Receitas Feitas
      </button>
      <button
        type="button"
        data-testid="profile-favorite-btn"
        onClick={ () => history.push('/receitas-favoritas') }
      >
        Receitas Favoritas
      </button>
      <button
        type="button"
        data-testid="profile-logout-btn"
        onClick={ handeClickLogOut }
      >
        Sair
      </button>
      <Footer />
    </div>
  );
}
