import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import saveInProgress from '../services/SaveInProgress';
import '../styles/ReceitaDetalhes.css';

function DetailsButton(props) {
  const { push } = useHistory();
  const { value: {
    url,
    food,
    recipe,
    inProgress,
    setInProgress,
  } } = props;

  if (!inProgress) {
    return (
      <button
        className="start"
        data-testid="start-recipe-btn"
        type="button"
        onClick={ saveInProgress({ recipe, url, food, setInProgress }) }
      >
        <a href={ `${url}/in-progress` }>Iniciar Receita</a>
      </button>
    );
  }
  return (
    <button
      className="start"
      data-testid="start-recipe-btn"
      type="button"
      onClick={ () => {
        // localStorage.setItem('doneRecipes', null);
        push(`${url}/in-progress`);
      } }
    >
      Continuar Receita
      {/* <a href={ `${url}/in-progress` }>Continuar Receita</a> */}
    </button>
  );
}

DetailsButton.propTypes = {
  value: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default DetailsButton;
