import React from 'react';

import RecipeDetails from '../../components/RecipeDetails';
import RecipesCarousel from '../../components/RecipesCarousel';

function DetalhesComida() {
  return (
    <main>
      <RecipeDetails />
      <RecipesCarousel />
      <button type="button" className="button-start" data-testid="start-recipe-btn">
        Iniciar Receita
      </button>
    </main>
  );
}

export default DetalhesComida;
