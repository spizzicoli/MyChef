import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { IonApp } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { Route } from 'react-router'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'

// ACTION CREATORS
// function called in the UI, the type name is related to some REDUCERS 
export const setInitialState = (payload) => {
  return {
    type: 'SET_INITIAL_STATE',
    payload: payload
  }
}
export const addFavourite = (payload) => {
  return {
    type: 'ADD_FAVOURITE',
    payload: payload
  }
}
export const removeFavourite = (payload) => {
  return {
    type: 'REMOVE_FAVOURITE',
    payload: payload
  }
}

// INITIAL STATE
export const initialState = [{}];

// REDUCERS
// are functions called by ACTION CREATORS that take the current state and an action as arguments, 
// and return a new state result. In other words, (state, action) => newState.
const rootReducer = function (state, action) {
  let newState, recipeToUpdate;

  if (action.type === "SET_INITIAL_STATE") {
    newState = [
      action.payload
    ];
  } else {
    newState = [
      ...state
    ];
  }

  switch (action.type) {
    case "SET_INITIAL_STATE":
      // console.log('\nvecchio stato: ', state, '\nnuovo stato: ', newState, '\naction: ', action);
      return newState;

    case "ADD_FAVOURITE":
      recipeToUpdate = newState[0].filter((recipe) => {
        return recipe.id === action.payload;
      });
      recipeToUpdate[0].favourite = true;

      // console.log('\nvecchio stato: ', state, '\nnuovo stato: ', newState, '\naction: ', action);
      return newState;

    case "REMOVE_FAVOURITE":
      recipeToUpdate = newState[0].filter((recipe) => {
        return recipe.id === action.payload;
      });
      recipeToUpdate[0].favourite = false;

      // console.log('\nvecchio stato: ', state, '\nnuovo stato: ', newState, '\naction: ', action);
      return newState;

    default:
      return newState;
  }
};

// STORE
// with store we can now call dispatch, getState, subscribe, etc..
// to interact with the global state
export const store = createStore(rootReducer, initialState, devToolsEnhancer({}));

// SUBSCRIBE
// when whatever dispatch method is called to send a message to the store
// the subscribe method run
store.subscribe(() => {
  // lancio il console log solo se la modifica fatta riguarda lo stato
  // che mi interessa ovvero il buttonClicked in questo caso
  //if (store.getState().favourite) {
    //console.log('\n\nHai aggiunto questa ricetta ai preferiti');
  //} else {
    //console.log('\n\nHai rimosso questa ricetta ai preferiti');
  //}
});

ReactDOM.render(
  <IonReactRouter>
    <Provider store={store}>
      <IonApp>
        <Route path="/" component={App} />
      </IonApp>
    </Provider>
  </IonReactRouter>,
  document.getElementById('root')
)
