import React, { useState } from 'react';
import PropTypes from 'prop-types';

import RecipesContext from './RecipesContext';

function RecipesProvider({ children }) {
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [recipeCategory, setRecipeCategory] = useState('All');

  return (
    <RecipesContext.Provider
      value={ {
        recipes,
        setRecipes,
        categories,
        setCategories,
        recipeCategory,
        setRecipeCategory,
      } }
    >
      { children }
    </RecipesContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RecipesProvider;
