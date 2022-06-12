import * as model from './model.js';
import recipeView from './views/recipeView.js';
import SearchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import PaginationView from './views/paginationView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime/runtime';

// const recipeContainer = document.querySelector('.recipe');
// if (module.hot) {
//   module.hot.accept();
// }

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    // loading spanner
    recipeView.renderSpinner();
    // renderSpinner(recipeContainer);

    // 1: load recipe
    await model.loadRecipe(id);
    // const { recipe } = model.state;

    // 2) rendering recipe
    recipeView.render(model.state.recipe);
  } catch (error) {
    recipeView.renderError();
  }
};

// search
const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();
    const query = SearchView.getQuery();
    if (!query) return;

    await model.loadSearchResults(query);
    // resultsView.render(model.state.search.results);
    resultsView.render(model.getSearchResultsPage(1));

    // render pagination
    PaginationView.render(model.state.search);
    console.log(model.state.search);
  } catch (error) {
    console.log(error);
  }
};

//id link hashachange
const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  SearchView.addHandlerSearch(controlSearchResults);
};

init();
