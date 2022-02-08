import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { IonApp } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { Route } from 'react-router'
import { atom, RecoilRoot, selector } from 'recoil'
import { RecipeItem } from './components/Recipe/Recipe'

export const recipeListState = atom<RecipeItem[]>({
  key: 'recipeListState',
  default: [],
});

export const filterRecipeByFavourite = atom({
  key: 'filterRecipeByFavourite',
  default: true,
});

export const favouriteRecipes = selector({
  key: 'favouriteRecipes',
  get: ({ get }) => {
    const filterFav = get(filterRecipeByFavourite);
    const recipeList = get(recipeListState);

    if (filterFav) {
      return recipeList.filter((recipeItem) => recipeItem.favourite === true);
    } else {
      return recipeList.filter((recipeItem) => recipeItem.favourite === false);
    }
  }
});

ReactDOM.render(
  <IonReactRouter>
    <RecoilRoot>
      <IonApp>
        <Route path="/" component={App} />
      </IonApp>
    </RecoilRoot>
  </IonReactRouter>,
  document.getElementById('root')
)
