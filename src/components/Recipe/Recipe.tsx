import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonIcon, IonLabel, IonItem } from '@ionic/react'
import { stopwatchOutline } from 'ionicons/icons'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { recipeListState } from '../..'
import Emoji from '../Emoji/Emoji'

import './Recipe.scss'

export interface RecipeItem {
  idRecipe: number;
  imgUrl: any;
  title: string;
  time: string;
  favourite?: boolean;
  money: string;
  people: string;
  summary: React.ReactNode;
}

interface RecipeInterface {
  recipeItem: RecipeItem;
}

const Recipe: React.FC<RecipeInterface> = recipeItem => {
  const urlRecipe: string = `/recipe-details/:${recipeItem.recipeItem.idRecipe}`;
  const [recipeList, setRecipeList] = useRecoilState<RecipeItem[]>(recipeListState);
  const [isFavourite, setIsFavourite] = useState<boolean>(recipeItem.recipeItem.favourite || false);
  const recipeIndex = recipeList.findIndex((recipeListItem) => recipeListItem === recipeItem.recipeItem);

  function replaceItemAtIndex(arr, index, newValue) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
  }

  const toggleToFavourite = () => {
    const newRecipeList = replaceItemAtIndex(recipeList, recipeIndex, {
      ...recipeItem.recipeItem,
      favourite: !isFavourite,
    });

    setIsFavourite(!isFavourite);
    setRecipeList(newRecipeList);
    console.log('\n\nricetta aggiornata la favourite: ', recipeList);
  };

  return (
    <IonCard className="recipe">
      <Link className="recipe__link" to={urlRecipe}></Link>
      <div className="recipe__img">
        <img src={recipeItem.recipeItem.imgUrl} alt="recipe-img" />
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
        <IonCardTitle>{recipeItem.recipeItem.title}</IonCardTitle>
        <IonCardSubtitle>
          <div className="recipe__time">
            <IonIcon icon={stopwatchOutline} />
            <IonLabel>{recipeItem.recipeItem.time}</IonLabel>
          </div>
        </IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent className="card-line-clamp">{recipeItem.recipeItem.summary}</IonCardContent>
    </IonCard>
  );
}

export default Recipe;