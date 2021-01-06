import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/react'
import React from 'react'
import { RouteComponentProps } from 'react-router'

const User: React.FC<RouteComponentProps> = ({ location }) => {
  const state = location.state as { name: string }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" text="" />
          </IonButtons>
          <IonTitle>{state?.name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <p>Hello {state?.name}</p>
      </IonContent>
    </IonPage>
  )
}

export default User
