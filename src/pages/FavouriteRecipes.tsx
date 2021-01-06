import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'
import { store } from '..'
import Emoji from '../components/Emoji/Emoji'
import Recipe from '../components/Recipe/Recipe'

const About: React.FC = () => {
  const recipes = store.getState()[0];
  const favRecipes = recipes.filter((recipe) => {
    return recipe.favourite;
  });
  const emptyFavRecipes = favRecipes.length > 0 ? false : true;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/recipes" text="" />
          </IonButtons>
          <IonTitle>Favourite Recipes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        { !emptyFavRecipes && favRecipes &&
          <p>
            Hey there, this is your place. <br/>
            Here you can find all your Favourite Recipes. <br/>
            Take a look! 
            <Emoji symbol="😍" />
          </p>
        }
        { !emptyFavRecipes && favRecipes &&
          favRecipes.map((recipe, key) => {
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

        { emptyFavRecipes && <>
          <h2>I'm sorry! <br/>You don't have any favourite recipe here.</h2>
          <p>
            Please visit Recipe page and select your favourites.
            Next time you came here you'll see it in this page.
          </p>
        </>}
      </IonContent>
    </IonPage>
  )
}

export default About
