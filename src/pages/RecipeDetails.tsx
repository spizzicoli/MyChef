import { IonBackButton, IonButtons, IonContent, IonHeader, IonIcon, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import { cashOutline, happyOutline, hourglassOutline } from 'ionicons/icons'
import React, { useEffect, useState } from 'react'
import { store } from '..';

import './Common.scss'

const RecipeDetails: React.FC = () => {
  const API_KEY = "48dfa29ba0a34098ab1b0b70539db70a";
  const idRecipe: string = location.pathname.split(':')[1];
  const [recipeDetails, setRecipeDetails] = useState<any>();

  const recipeToShow = store.getState().filter((recipe) => {
    return recipe.idRecipe === parseInt(idRecipe);
  });

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

  /* Effect for retrieve specific recipe */
  useEffect(() => {
    getData(`https://api.spoonacular.com/recipes/${idRecipe}/information?apiKey=${API_KEY}&number=10`)
    .then(data => {
      console.log('\n\ndettaglio ricetta: ', data);
      setRecipeDetails(data);
    })
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonBackButton defaultHref="/recipes" text="" />
          </IonButtons>
          <IonTitle>Recipes Details</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {idRecipe && recipeDetails &&
          <div className="recipe-details">
            <div className="recipe-details__image">
              <img src={recipeDetails.image} alt="recipe-img" />
            </div>

            <div className="recipe-details__description">
              <h2>{recipeDetails.title}</h2>
              
            <div className="recipe-details__info">
              <p className="recipe-details__time">
                <IonIcon icon={hourglassOutline} />
                <IonLabel>{recipeDetails.readyInMinutes}</IonLabel>
              </p>
              <p className="recipe-details__people">
                <IonIcon icon={happyOutline} />
                <IonLabel>{recipeDetails.servings}</IonLabel>
              </p>
              <p className="recipe-details__money">
                <IonIcon icon={cashOutline} />
                <IonLabel>{recipeDetails.pricePerServing}</IonLabel>
              </p>
            </div>
              <div dangerouslySetInnerHTML={{__html: recipeDetails.summary}}></div>
            </div>
          </div>
        }
      </IonContent>
    </IonPage>
  )
}

export default RecipeDetails
