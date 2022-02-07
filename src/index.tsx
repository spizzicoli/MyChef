import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { IonApp } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { Route } from 'react-router'
import { atom, RecoilRoot } from 'recoil'
import { RecipeItem } from './components/Recipe/Recipe'

export const recipeListState = atom<RecipeItem[]>({
  key: 'recipeListState',
  default: [],
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
