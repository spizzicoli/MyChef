import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'
import Recipe from '../components/recipe'

const About: React.FC = () => {
  {/**
    Qua passo le info della Recipe.tsx scelta
  */}

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Recipes Details</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <p>Dettaglio della ricetta cliccata</p>
      </IonContent>
    </IonPage>
  )
}

export default About
