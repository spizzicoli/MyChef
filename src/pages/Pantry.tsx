import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonAvatar, IonButton, IonText } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router'
import { BarcodeScanner } from '@ionic-native/barcode-scanner'
import { HTTP, HTTPResponse } from '@ionic-native/http'

const User: React.FC<RouteComponentProps> = ({ location }) => {
  // state = location.state as { name: string }
  const [productFound, setProductFound] = useState(false);
  const [productList, setProductList] = useState<any>([]);
  const API_KEY = 'a47ug7ubnjhujwuryotbizrkvfyhz5';

  const scanCode = async () => {
    // sforo il limite mensile di chiamate ho mockuppato una chiamata la uso staticamente
    const data = await BarcodeScanner.scan();

    // alert(data.text);
    // alert(`https://api.barcodelookup.com/v2/products?barcode=${data.text}&formatted=y&key=${API_KEY}`);
    getData(`https://api.barcodelookup.com/v2/products?barcode=${data.text}&formatted=y&key=${API_KEY}`)
    .then(data => {
      // alert('data che arriva nel then');
      // alert(JSON.stringify(data));
      if (data) {
        setProductFound(true);
        addProductScannedToList(data.products);
      }
    })
   
    /*
    const objectScanned = {
      "products": [
        {
          "barcode_number": "791440002890",
          "barcode_type": "UPC",
          "barcode_formats": "UPC 791440002890, EAN 0791440002890",
          "mpn": "B228",
          "model": "",
          "asin": "",
          "product_name": "Oil Filter,Spin-on,Full-Flow",
          "title": "",
          "category": "Vehicles & Parts > Vehicle Parts & Accessories > Vehicle Maintenance, Care & Decor > Vehicle Covers > Vehicle Storage Covers > Automotive Storage Covers",
          "manufacturer": "BALDWIN FILTERS",
          "brand": "BALDWIN FILTERS",
          "label": "",
          "author": "",
          "publisher": "",
          "artist": "",
          "actor": "",
          "director": "",
          "studio": "",
          "genre": "",
          "audience_rating": "",
          "ingredients": "",
          "nutrition_facts": "",
          "color": "",
          "format": "",
          "package_quantity": "",
          "size": "",
          "length": "",
          "width": "",
          "height": "",
          "weight": "0.67",
          "release_date": "",
          "description": "Oil Filter, Filter Design Spin-On, Thread Size - Automotive Filters 3/4 in, Length 3 1/2 in, Outside Dia. 3 in, Micron Rating 23, Includes Anti-Drainback Valve, 30PSID By-Pass Valve, I. Gasket, Fluid Type - Automotive Filters Oil, Description/Special Features Full-Flow Lube Spin-on.",
          "features": [],
          "images": [
            "https://images.barcodelookup.com/2837/28374703-1.jpg"
          ],
          "stores": [
            {
              "store_name": "FinditParts",
              "store_price": "7.47",
              "product_url": "https://www.finditparts.com/products/62944/baldwin-filters-b228?srcid=CHL01SCL010-Npla-Dmdt-Gusa-Svbr-Mmuu-K62944-L369",
              "currency_code": "USD",
              "currency_symbol": "$"
            },
            {
              "store_name": "Zoro",
              "store_price": "8.89",
              "product_url": "https://www.zoro.com/baldwin-filters-spin-on-34-thread-3-12-l-b228/i/G2106474/",
              "currency_code": "USD",
              "currency_symbol": "$"
            },
            {
              "store_name": "Rakuten.com",
              "store_price": "9.88",
              "product_url": "https://www.rakuten.com/shop/zoro/product/G2106474/?sku=G2106474&scid=af_feed",
              "currency_code": "USD",
              "currency_symbol": "$"
            },
            {
              "store_name": "Walmart",
              "store_price": "9.88",
              "product_url": "https://www.walmart.com/ip/Spin-On-Oil-Filter-Length-3-1-2-Outside-Dia-3-Micron-Rating-23/143085643&intsrc=CATF_4276",
              "currency_code": "USD",
              "currency_symbol": "$"
            }
          ],
          "reviews": []
        }
      ]
    };

    setProductFound(true);
    addProductScannedToList(objectScanned.products);
    */
  };

  // GET method implementation
  const getData = async (url = '') => {
    HTTP.setHeader('*', 'Content-Type', 'application/json');
    HTTP.setDataSerializer("json");
    const response = await HTTP.sendRequest(url, {
      method: 'get',
      responseType: 'json'
    });
    // alert('response');
    // alert(response.data);
    return response.data;
  }

  const addProductScannedToList = async (objectScanned) => {
    for (const key in objectScanned) {
      if (Object.prototype.hasOwnProperty.call(objectScanned, key)) {
        const element = objectScanned[key];
        setProductList([...productList, element]);
      }
    }
  }

  const removeProductFromList = (item) => {
    const indexItem = productList.filter((itemToDelete) => {
      return itemToDelete.barcode_number !== item;
    });
    setProductList(indexItem);
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
        {productList.length > 0 && !productFound &&
          <IonLabel>Il prodotto scansionato non è ancora nel database.</IonLabel>
        }

        {productList.length === 0 &&
          <IonLabel>Non hai ancora nessun prodotto nella dispensa.</IonLabel>
        }

        {productList && 
          productList.map((element, key) => {
            return (
              <IonItemSliding key={key}>
                <IonItem>
                  <IonAvatar slot="start">
                    <img src={element.images[0]} />
                  </IonAvatar>
                  <IonLabel>{element.product_name}</IonLabel>
                </IonItem>
                <IonItemOptions side="end">
                  <IonItemOption onClick={() => removeProductFromList(element.barcode_number)}>Remove</IonItemOption>
                </IonItemOptions>
              </IonItemSliding>
            )
          })
        }

        <IonButton onClick={scanCode} color="primary">Scan</IonButton>
      </IonContent>
    </IonPage>
  )
}

export default User
