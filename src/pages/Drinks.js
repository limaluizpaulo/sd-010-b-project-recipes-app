import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { GlobalContext } from '../context/Provider';
import Footer from '../components/Footer';
import Categories from '../components/Categories';

const Drinks = () => {
  const { drinks: defaultDrinks, recipes: { drinks = [] } } = useContext(GlobalContext);
  // const [defaultDrinks, setDefaultDrinks] = useState([]);

  const renderCard = () => {
    const magic = 12;
    if (drinks && defaultDrinks) {
      const recipes = drinks.length ? drinks : defaultDrinks;
      const newRecipes = recipes.filter((_, idx) => idx < magic);
      return newRecipes.map(({ strDrinkThumb, strDrink, idDrink }, index) => (
        <Link key={ idDrink } to={ `/bebidas/${idDrink}` }>
          <div key={ index } className="cards" data-testid={ `${index}-recipe-card` }>
            <img
              data-testid={ `${index}-card-img` }
              src={ strDrinkThumb }
              alt={ strDrink }
            />
            <div className="container">
              <p data-testid={ `${index}-card-name` }>{strDrink}</p>
            </div>
          </div>
        </Link>
      ));
    }
    return [];
  };

  return (
    <div>
      <Header title="Bebidas" search />
      <Categories />
      <div className="grade">
        {renderCard().length && renderCard()}
      </div>
      <Footer />
    </div>
  );
};

export default Drinks;
