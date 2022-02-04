import { IonContent, IonPage } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import Recipe from '../components/Recipe/Recipe'
import FoodTag from '../components/FoodTag/FoodTag'
import pizza1 from '../assets/images/pizza1.png'
import pizza2 from '../assets/images/pizza2.png'
import pizza3 from '../assets/images/pizza3.png'
import pizza4 from '../assets/images/pizza4.png'
import lineClamp from 'line-clamp'
import { setInitialState, store } from '..'
import Search from '../components/Search/Search'
import Slider from 'react-slick'

const Recipes: React.FC = () => {
  const API_KEY = "48dfa29ba0a34098ab1b0b70539db70a";
  const [recipeList, setRecipeList] = useState<any>();
  const cardText = document.getElementsByClassName('card-line-clamp');
  const settings = {
    infinite: true,
    speed: 500,
    beforeChange: (oldIndex, newIndex) => {
      console.log('\n\n hai fatto swipe!');
    },
  };

  /* GET method implementation
  async function getData(url = '') {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      //body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  /* Effect for retrieve recipes 
  useEffect(() => {
    getData(`https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=10`)
    .then(data => {
      setRecipeList(data.recipes);
      store.dispatch(setInitialState(data.recipes));
    })
  }, []);
  */

  let cardTextLoaded = setInterval(() => {
    if (cardText.length > 0) {
      clearInterval(cardTextLoaded);
      for (const key in cardText) {
        if (Object.prototype.hasOwnProperty.call(cardText, key)) {
          const elem = cardText[key];
          lineClamp(elem, 5);
        }
      }
    }
  }, 500);

  useEffect(() => {
    const recipesList = [
      {
        id: '1',
        image: pizza1,
        title: 'Peperoni cotto e olive',
        readyInMinutes: '2h',
        pricePerServing: '20$',
        servings: '5 people',
        summary: 'One of the most famous dish of Italian culture',
        favourite: false
      },
      {
        id: '2',
        image: pizza2,
        title: 'Capricciosa',
        readyInMinutes: '2h',
        pricePerServing: '10$',
        servings: '5 people',
        summary: 'One of the most famous dish of Italian culture',
        favourite: true
      },
      {
        id: '3',
        image: pizza3,
        title: 'Salame piccante',
        readyInMinutes: '1h',
        pricePerServing: '35$',
        servings: '5 people',
        summary: 'One of the most famous dish of Italian culture',
        favourite: false
      },
      {
        id: '4',
        image: pizza4,
        title: 'Vegetariana',
        readyInMinutes: '1h',
        pricePerServing: '45$',
        servings: '5 people',
        summary: 'One of the most famous dish of Italian culture',
        favourite: false
      }
    ];

    setRecipeList(recipesList);
    store.dispatch(setInitialState(recipeList));
  }, []);

  return (
    <IonPage className="recipes-page">
      <IonContent className="ion-padding">
        <p className="page-title">What is your <br /> favourite recipe?</p>
        <Search></Search>
        <FoodTag></FoodTag>
        <Slider {...settings}>
          {recipeList &&
            recipeList.map((recipe, key) => {
              console.log('\n\nRICETTE: ', recipe)
              return <Recipe
                key={key}
                idRecipe={recipe.id}
                imgUrl={recipe.image}
                title={recipe.title}
                time={recipe.readyInMinutes}
                money={recipe.pricePerServing}
                people={recipe.servings}
                favourite={recipe.favourite}>
                <div className="card-line-clamp" dangerouslySetInnerHTML={{ __html: recipe.summary }} />
              </Recipe>
            })
          }
        </Slider>
      </IonContent>
    </IonPage>
  )
}

export default Recipes
