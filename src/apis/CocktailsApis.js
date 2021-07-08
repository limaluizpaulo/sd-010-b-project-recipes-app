// filter cocktails based on SearchBar
export async function fetchCocktailsApi({ searchText, filter }) {
  if (filter === 'ingredient') {
    const request = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchText}`);
    const { drinks } = await request.json();
    return drinks === null ? [] : drinks;
  }
  if (filter === 'name') {
    const request = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`);
    const { drinks } = await request.json();
    return drinks === null ? [] : drinks;
  }
  if (filter === 'firstLetter') {
    const request = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchText}`);
    const { drinks } = await request.json();
    return drinks === null ? [] : drinks;
  }
}

// All cocktails
export async function fetchCocktailsRecomendation() {
  const request = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
  const { drinks } = await request.json();
  return drinks;
}

// only one cocktail, by ID
export async function fetchDrinksById(id) {
  const request = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
  const { drinks } = await request.json();
  return drinks;
}

export async function fetchDrinkRandom() {
  const request = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
  const drinkRandom = await request.json();
  console.log(drinkRandom);
  return drinkRandom;
}

// filter drinks based on Category

export async function fetchCocktailsByCategory(cat) {
  const request = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${cat}`);
  const { drinks } = await request.json();
  return drinks;
}

// return all cocktails Categories
export async function fetchCocktailsCategories() {
  const request = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
  const { drinks } = await request.json();
  return drinks;
}
