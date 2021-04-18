import {IonContent, IonPage } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import Recipe from '../components/Recipe/Recipe'
import FoodTag from '../components/FoodTag/FoodTag'
import lineClamp from 'line-clamp'
import { setInitialState, store } from '..'

const About: React.FC = () => {
  const API_KEY = "48dfa29ba0a34098ab1b0b70539db70a";
  const [recipeList, setRecipeList] = useState<any>();
  const cardText = document.getElementsByClassName('card-line-clamp');

  // GET method implementation
  async function getData(url = '') {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      //body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  /* Effect for retrieve recipes */
  useEffect(() => {
    getData(`https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=10`)
    .then(data => {
      setRecipeList(data.recipes);
      store.dispatch(setInitialState(data.recipes));
    })
  }, []);

  let cardTextLoaded = setInterval(() => {
    if (cardText.length > 0) {
      clearInterval(cardTextLoaded);
      for (const key in cardText) {
        if (Object.prototype.hasOwnProperty.call(cardText, key)) {
          const elem = cardText[key];
          lineClamp(elem, 5);
        }
      }
    }
  }, 500);
  
  return (
    <IonPage className="recipes-page">
      <IonContent className="ion-padding">
        <p className="page-title">Cosa cucinerai <br/> oggi?</p>
        <FoodTag></FoodTag>
        { recipeList && 
          recipeList.map((recipe, key) => {
            // console.log('\n\nRICETTE: ', recipe)
            return <Recipe 
              key={key}
              idRecipe={recipe.id} 
              imgUrl={recipe.image} 
              title={recipe.title} 
              time={recipe.readyInMinutes}
              money={recipe.pricePerServing}
              people={recipe.servings}
              favourite={recipe.favourite}>
                <div className="card-line-clamp" dangerouslySetInnerHTML={{__html: recipe.summary}}/>
            </Recipe>
          })
        }
      </IonContent>
    </IonPage>
  )
}

export default About
