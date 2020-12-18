import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonIcon, IonLabel } from '@ionic/react';
import { stopwatchOutline } from 'ionicons/icons';
import React from 'react';

import './Recipe.scss';

const Recipe: React.FC = props => {
  const url = 'https://source.unsplash.com/350x200/?recipe,dish';

  return (
    <IonCard className="recipe">
      <a href="/recipe-details"></a>
      <img src={url} alt="recipe-img"/>

      <IonCardHeader>
        <IonCardTitle>Name Recipe</IonCardTitle>
        <IonCardSubtitle>
          <div className="recipe__time">
            <IonIcon icon={stopwatchOutline} />
            <IonLabel>10 min</IonLabel>
          </div>
          <div className="recipe__challenge">
            <div className="recipe__color"></div>
            <p>Easy</p>
          </div>
        </IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        Keep close to Nature's heart... and break clear away, once in awhile,
        and climb a week in the woods. Wash your clean.
      </IonCardContent>
    </IonCard>
  );
}

export default Recipe;