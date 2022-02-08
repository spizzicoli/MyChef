import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { favouriteRecipes } from '..'
import Emoji from '../components/Emoji/Emoji'
import Recipe from '../components/Recipe/Recipe'

const FavouriteRecipes: React.FC = () => {
  const favRecipes = useRecoilValue(favouriteRecipes);

  return (
    <IonPage className="favourite-page">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/recipes" text="" />
          </IonButtons>
          <IonTitle>Favourite Recipes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {favRecipes && favRecipes.length > 0 &&
          <div className='favourite-recipe__welcome'>
            <p>
              Hey there, this is your place. <br />
              Here you can find all your Favourite Recipes. <br />
              Take a look!
              <Emoji symbol="😍" />
            </p>
          </div>
        }
        {favRecipes.map((recipe, key) => {
          return <Recipe
            key={key}
            recipeItem={recipe}>
          </Recipe>
        })
        }

        {favRecipes.length <= 0 && <>
          <h2>You don't have any favourite recipe here.</h2>
          <p>
            Please visit Recipes page and add your first recipe to favourites.
          </p>
        </>}
      </IonContent>
    </IonPage >
  )
}

export default FavouriteRecipes
