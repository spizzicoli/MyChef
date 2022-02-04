import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonAvatar, IonButton, IonText, IonList } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router'
import lineClamp from 'line-clamp'
import { BarcodeScanner } from '@ionic-native/barcode-scanner'
import { HTTP, HTTPResponse } from '@ionic-native/http'

const User: React.FC<RouteComponentProps> = ({ location }) => {
  // state = location.state as { name: string }
  const [productFound, setProductFound] = useState(false);
  const [productList, setProductList] = useState<any>([]);
  const API_KEY = 'a47ug7ubnjhujwuryotbizrkvfyhz5';
  const slidingItem = document.getElementsByClassName('sliding-item-line-clamp');
  const [numberObjectScanned, setNumberObjectScanned] = useState(1);

  const scanCode = async () => {
    let nmbObjScanned = numberObjectScanned;
    /* sforo il limite mensile di chiamate ho mockuppato una chiamata la uso staticamente
    const data = await BarcodeScanner.scan();

    getData(`https://api.barcodelookup.com/v2/products?barcode=${data.text}&formatted=y&key=${API_KEY}`)
    .then(data => {
      if (data) {
        setProductFound(true);
        addProductScannedToList(data.products);
      }
    });
    */
   
    // Mockup chiamata API
    const objectScanned1 = {
      "products": [
        {
          "barcode_number": "791440002890",
          "barcode_type": "UPC",
          "barcode_formats": "UPC 791440002890, EAN 0791440002890",
          "mpn": "B228",
          "model": "",
          "asin": "",
          "product_name": "Pomodori rossi",
          "title": "",
          "category": "Food",
          "manufacturer": "Conad",
          "brand": "Conad",
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
          "package_quantity": "10",
          "size": "",
          "length": "",
          "width": "",
          "height": "",
          "weight": "0.67",
          "release_date": "",
          "description": "Confezione da 10 pomodori rossi della maremma Toscana.",
          "features": [],
          "images": [
            "https://source.unsplash.com/random/75x54/?red-tomatoes"
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

    const objectScanned2 = {
      "products": [
        {
          "barcode_number": "791440002892",
          "barcode_type": "UPC",
          "barcode_formats": "UPC 791440002890, EAN 0791440002890",
          "mpn": "B228",
          "model": "",
          "asin": "",
          "product_name": "Guanciale",
          "title": "",
          "category": "Food",
          "manufacturer": "Esselunga",
          "brand": "Esselunga",
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
          "package_quantity": "2",
          "size": "",
          "length": "",
          "width": "",
          "height": "",
          "weight": "0.67",
          "release_date": "",
          "description": "Un etto di pregiato guanciale locale, perfetto per piatti succulenti.",
          "features": [],
          "images": [
            "https://source.unsplash.com/random/75x54/?pork-cheek"
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

    const objectScanned3 = {
      "products": [
        {
          "barcode_number": "791440002893",
          "barcode_type": "UPC",
          "barcode_formats": "UPC 791440002890, EAN 0791440002890",
          "mpn": "B228",
          "model": "",
          "asin": "",
          "product_name": "Pasta integrale",
          "title": "",
          "category": "Food",
          "manufacturer": "Esselunga",
          "brand": "Esselunga",
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
          "package_quantity": "2",
          "size": "",
          "length": "",
          "width": "",
          "height": "",
          "weight": "0.67",
          "release_date": "",
          "description": "Pasta integrale",
          "features": [],
          "images": [
            "https://source.unsplash.com/random/75x54/?wholemeal-pasta"
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

    // for test
    switch (nmbObjScanned) {
      case 2:
        setProductFound(true);
        addProductScannedToList(objectScanned2.products);
        break;

      case 3:
        setProductFound(true);
        addProductScannedToList(objectScanned3.products);
        break;
    
      default:
        setProductFound(true);
        addProductScannedToList(objectScanned1.products);
        break;
    }

    // setProductFound(true);
    // addProductScannedToList(objectScanned.products);
    nmbObjScanned = numberObjectScanned < 3 ? numberObjectScanned + 1 : numberObjectScanned;
    setNumberObjectScanned(nmbObjScanned);
  };

  /* GET method implementation
  const getData = async (url = '') => {
    HTTP.setHeader('*', 'Content-Type', 'application/json');
    HTTP.setDataSerializer("json");
    const response = await HTTP.sendRequest(url, {
      method: 'get',
      responseType: 'json'
    });
    return response.data;
  }
  */

  const addProductScannedToList = async (objectScanned) => {
    console.log('\n\nElement scanned: ', objectScanned);
    for (const key in objectScanned) {
      if (Object.prototype.hasOwnProperty.call(objectScanned, key)) {
        const element = objectScanned[key];
        console.log('\n\nElement: ', element);

        // se il barcode_number è già presente aumento la quantità
        console.log('\n\nProduct List: ', productList);
        const existingProducts = productList.findIndex((productInList) => {
          if (productInList.barcode_number === element.barcode_number) {
            const newQuantity = +element.package_quantity || 1;
            const oldQuantity = +productInList.package_quantity || 1;
            productInList.package_quantity = oldQuantity + newQuantity;
            return true;
          }
        });

        if (existingProducts !== -1) {
          console.log('\n il prodotto esisteva gia, quantity aggiornata: ', existingProducts);
          setProductList([...productList]);
        } else {
          console.log('\n il prodotto NON esisteva, aggiunto: ', existingProducts);
          setProductList([...productList, element]);
        }
      }
    }
  }

  const removeProductFromList = (item) => {
    const indexItem = productList.filter((itemToDelete) => {
      return itemToDelete.barcode_number !== item;
    });
    setProductList(indexItem);
  }

  let slidingItemLoaded = setInterval(() => {
    if (slidingItem.length > 0) {
      clearInterval(slidingItemLoaded);
      for (const key in slidingItem) {
        if (Object.prototype.hasOwnProperty.call(slidingItem, key)) {
          const elem = slidingItem[key];
          lineClamp(elem, 2);
        }
      }
    }
  }, 100);

  return (
    <IonPage className="pantry-page">
      <IonHeader mode="ios">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" text="" />
          </IonButtons>
          <IonTitle>Pantry{/*state?.name*/}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList lines="none">
          {productList.length > 0 && !productFound &&
            <IonLabel>Il prodotto scansionato non è ancora nel database.</IonLabel>
          }

          {productList.length === 0 &&
            <IonLabel>Non hai ancora nessun prodotto nella dispensa.</IonLabel>
          }

          {productList && productList.length > 0 && 
            productList.map((element, key) => {
              return (
                <IonItemSliding key={key}>
                  <IonItem>
                    <img src={element.images[0]} />
                    <div className="product__info">
                      <IonLabel className="product__title">{element.product_name}</IonLabel>
                      <IonLabel className="product__quantity">x {element.package_quantity ? element.package_quantity : 1}</IonLabel>
                      <IonText>
                        <p className="sliding-item-line-clamp">{element.description}</p>
                      </IonText>
                    </div>
                  </IonItem>
                  <IonItemOptions side="end">
                    <IonItemOption onClick={() => removeProductFromList(element.barcode_number)}>Remove</IonItemOption>
                  </IonItemOptions>
                </IonItemSliding>
              )
            })
          }
        </IonList>
        <button onClick={scanCode}>Scan</button>
      </IonContent>
    </IonPage>
  )
}

export default User
