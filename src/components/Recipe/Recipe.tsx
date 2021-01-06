import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonIcon, IonLabel, IonItem } from '@ionic/react'
import { stopwatchOutline } from 'ionicons/icons'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { store, addFavourite, removeFavourite } from '../..'
import Emoji from '../Emoji/Emoji'

import './Recipe.scss'

interface RecipeInterface {
  idRecipe: number;
  imgUrl: string;
  title: string;
  time: string;
  favourite?: boolean;
  money: string;
  people: string;
}

const Recipe: React.FC<RecipeInterface> = props => {
  const urlRecipe: string = `/recipe-details/:${props.idRecipe}`;
  const [isFavourite, setIsFavourite] = useState<boolean>(props.favourite || false);

  const toggleToFavourite = () => {
    const recipes = store.getState()[0];
    const payload = props.idRecipe;
    const recipeToChange = recipes.filter((recipe) => {
      return recipe.id === payload;
    });
    const positionRecipeToChange = recipes.indexOf(recipeToChange[0]);

    // DISPATCH
    // call a state change based on an action
    if (isFavourite) {
      store.dispatch(removeFavourite(payload));
    } else {
      store.dispatch(addFavourite(payload));
    }

    // fatto il dispatch mi salvo il nuovo valore
    //console.log('\n recipes: ', recipes, '\n recipesToChange: ', recipeToChange, '\n positionRecipeToChange: ', positionRecipeToChange);
    setIsFavourite(recipes[positionRecipeToChange].favourite);
  }

  return (
    <IonCard className="recipe">
      <Link className="recipe__link" to={urlRecipe}></Link>
      <div className="recipe__img">
        <img src={props.imgUrl} alt="recipe-img" />
        <IonItem className={`recipe__favourite-icon`} onClick={toggleToFavourite} type="button">
          {isFavourite &&
            <Emoji symbol="💛" label="favourite" />
          }
          {!isFavourite &&
            <Emoji symbol="🖤" label="not-favourite" />
          }
        </IonItem>
      </div>

      <IonCardHeader>
        <IonCardTitle>{props.title}</IonCardTitle>
        <IonCardSubtitle>
          <div className="recipe__time">
            <IonIcon icon={stopwatchOutline} />
            <IonLabel>{props.time}</IonLabel>
          </div>
        </IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>{props.children}</IonCardContent>
    </IonCard>
  );
}

export default Recipe;