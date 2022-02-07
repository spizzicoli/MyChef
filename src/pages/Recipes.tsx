import { IonContent, IonPage } from '@ionic/react'
import React, { useEffect } from 'react'
import Recipe, { RecipeItem } from '../components/Recipe/Recipe'
import FoodTag from '../components/FoodTag/FoodTag'
import pizza1 from '../assets/images/pizza1.png'
import pizza2 from '../assets/images/pizza2.png'
import pizza3 from '../assets/images/pizza3.png'
import pizza4 from '../assets/images/pizza4.png'
import lineClamp from 'line-clamp'
import Search from '../components/Search/Search'
import Slider from 'react-slick'
import { useRecoilState } from 'recoil'
import { recipeListState } from '..'

const Recipes: React.FC = () => {
  const API_KEY = "48dfa29ba0a34098ab1b0b70539db70a";
  const cardText = document.getElementsByClassName('card-line-clamp');
  const sliderSettings = {
    infinite: true,
    speed: 500,
    beforeChange: (oldIndex, newIndex) => {
      console.log('\n\n hai fatto swipe!');
    },
  };
  const [recipeList, setRecipeList] = useRecoilState<RecipeItem[]>(recipeListState);

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

  useEffect(() => {
    // array di ricette che recupererò da un API
    const recipesList: RecipeItem[] = [
      {
        idRecipe: 1,
        imgUrl: pizza1,
        title: 'Peperoni cotto e olive',
        time: '2h',
        money: '20$',
        people: '5 people',
        summary: 'One of the most famous dish of Italian culture',
        favourite: false
      },
      {
        idRecipe: 2,
        imgUrl: pizza2,
        title: 'Capricciosa',
        time: '2h',
        money: '10$',
        people: '5 people',
        summary: 'One of the most famous dish of Italian culture',
        favourite: true
      },
      {
        idRecipe: 3,
        imgUrl: pizza3,
        title: 'Salame piccante',
        time: '1h',
        money: '35$',
        people: '5 people',
        summary: 'One of the most famous dish of Italian culture',
        favourite: false
      },
      {
        idRecipe: 4,
        imgUrl: pizza4,
        title: 'Vegetariana',
        time: '1h',
        money: '45$',
        people: '5 people',
        summary: 'One of the most famous dish of Italian culture',
        favourite: false
      }
    ];

    setRecipeList(recipesList);
  }, []);

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

  return (
    <IonPage className="recipes-page">
      <IonContent className="ion-padding">
        <p className="page-title">What is your <br /> favourite recipe?</p>
        <Search></Search>
        <FoodTag></FoodTag>
        <Slider {...sliderSettings}>
          {recipeList && recipeList.length > 0 && recipeList.map((recipe, key) => {
              console.log('\n\nRecipes: ', recipe)
              return <Recipe
                key={key}
                recipeItem={recipe}>
              </Recipe>
            })
          }
        </Slider>
      </IonContent>
    </IonPage>
  )
}

export default Recipes
