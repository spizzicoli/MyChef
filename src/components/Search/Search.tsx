import { IonIcon } from '@ionic/react';
import React from 'react'
import './Search.scss'

const Search: React.FC = () => {
  return (
    <div className="search">
        <IonIcon name="search-outline"></IonIcon>
        <input type="search" name="search-recipe" id="searchBar" placeholder="Search your recipe"/>
    </div>
  );
}

export default Search;