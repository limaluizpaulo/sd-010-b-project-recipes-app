/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Context from '../context/Context';
import Header from '../components/Header';
import HeaderSearchButton from '../components/HeaderSearchButton';
import Footer from '../components/Footer';
import RecipeCard from '../components/RecipeCard';
import CategoryBtn from '../components/CategoryBtn';

function Drinks() {
  const {
    drinks,
    categories,
    manageRenderDrink,
    filterCategory,
    updateEndPoint,
    toggle,
    handleToggle,
  } = useContext(Context);

  useEffect(() => {
    updateEndPoint('drinks');
  }, []);

  const maxRecipe = 12;
  const maxCategory = 5;
  const render = drinks.length > 0 && categories;

  const drinkList = () => drinks.slice(0, maxRecipe).map((drink, index) => (
    RecipeCard(drink, index)));

  const categoryList = () => categories.drinks.slice(0, maxCategory)
    .map(({ strCategory }) => (
      CategoryBtn(strCategory, filterCategory, handleToggle, toggle)));
  const renderList = (
    <div>
      <div>
        <Button
          variant="outline-dark"
          type="button"
          data-testid="All-category-filter"
          onClick={ () => {
            filterCategory();
            handleToggle('', false);
          } }
        >
          All
        </Button>
        {categoryList()}
      </div>
      <div className="recipe-list">
        {drinkList()}
      </div>
    </div>
  );

  return (
    <>
      <Header title="Bebidas" />
      <HeaderSearchButton />
      {render ? manageRenderDrink(renderList) : <div>Loading...</div>}
      <Footer />
    </>
  );
}

export default Drinks;
