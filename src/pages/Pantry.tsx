import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonAvatar, IonButton } from '@ionic/react'
import React from 'react'
import { RouteComponentProps } from 'react-router'
import { Plugins } from '@capacitor/core'
import {
  BarcodeScannerPlugin,
  EVENT_BARCODE_SCANNED,
  IBarcodeScannerEventPayload,
} from 'capacitor-plugin-barcodescanner'

const User: React.FC<RouteComponentProps> = ({ location }) => {
  // state = location.state as { name: string }

  // can be used later to remove BarcodeScanner listener
  let removeScannerHandler: () => void;
   
  const barcodeScanned = (state: IBarcodeScannerEventPayload): void => {
    console.log("BarcodeScanned - ",state.cancelled, state.barcode, state.error)
  }

  const BarcodeScanner = Plugins.BarcodeScanner as BarcodeScannerPlugin;
  removeScannerHandler = BarcodeScanner.addListener(
    EVENT_BARCODE_SCANNED,
    barcodeScanned
  ).remove;
 
  BarcodeScanner.scan();

  if(removeScannerHandler) {
    removeScannerHandler();
  }

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
