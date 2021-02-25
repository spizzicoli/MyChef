import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonAvatar } from '@ionic/react'
import React from 'react'
import { RouteComponentProps } from 'react-router'

const User: React.FC<RouteComponentProps> = ({ location }) => {
  // state = location.state as { name: string }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" text="" />
          </IonButtons>
          <IonTitle>Pantry{/*state?.name*/}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItemSliding>
          <IonItem>
            <IonAvatar slot="start">
              <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==" />
            </IonAvatar>
            <IonLabel>Tomatoes</IonLabel>
          </IonItem>
          <IonItemOptions side="end">
            <IonItemOption onClick={() => {}}>Remove</IonItemOption>
          </IonItemOptions>
        </IonItemSliding>
      </IonContent>
    </IonPage>
  )
}

export default User
