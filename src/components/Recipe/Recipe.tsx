import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonIcon, IonLabel, IonItem } from '@ionic/react'
import { stopwatchOutline } from 'ionicons/icons'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { recipeListState } from '../..'
import Emoji from '../Emoji/Emoji'

import './Recipe.scss'

export interface RecipeInterface {
  idRecipe: number;
  imgUrl: any;
  title: string;
  time: string;
  favourite?: boolean;
  money: string;
  people: string;
  summary: React.ReactNode;
}

const Recipe: React.FC<RecipeInterface> = props => {
  const urlRecipe: string = `/recipe-details/:${props.idRecipe}`;
  const [isFavourite, setIsFavourite] = useState<boolean>(props.favourite || false);
  const [recipeList, setRecipeList] = useRecoilState<RecipeInterface[]>(recipeListState);
  const [recipeToChange, setRecipeToChange] = useState<RecipeInterface>();

  const toggleToFavourite = () => {
    let recipeListUpdated;

    
    // aggiorna lo stato del cuoricino
    setIsFavourite(!isFavourite);

    // inizializza la ricetta da cambiare dalla lista di ricette prese dallo stato
    setRecipeToChange(recipeList.find((recipe) => recipe.idRecipe === props.idRecipe));

    // se trova la ricetta da cambiare aggiorna il valore di favourite
    if (recipeToChange) {
      setRecipeToChange({...recipeToChange, favourite: !isFavourite});      
    }

    // prepara la ricetta aggiornata da salvare nello stato
    recipeListUpdated = {...recipeList, recipeToChange};
    console.log('\n\nrecipeList: ', recipeList, '\n\nrecipeToChange: ', recipeToChange, '\n\nrecipeListUpdated: ', recipeListUpdated);
    // salva la ricetta aggiornata nello stato
    setRecipeList(recipeListUpdated);
  }

  return (
    <IonCard className="recipe">
      <Link className="recipe__link" to={urlRecipe}></Link>
      <div className="recipe__img">
        <img src={props.imgUrl} alt="recipe-img" />
        <div className={`recipe__favourite-icon`} onClick={toggleToFavourite}>
          {isFavourite &&
            <Emoji symbol="💛" label="favourite" />
          }
          {!isFavourite &&
            <Emoji symbol="🖤" label="not-favourite" />
          }
        </div>
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

      <IonCardContent className="card-line-clamp">{props.summary}</IonCardContent>
    </IonCard>
  );
}

export default Recipe;