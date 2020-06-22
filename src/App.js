import React,{useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {

  const APP_ID = "d6c7f4a1";
const APP_KEY = "4dfbea855aa8b1d9309ce9084fb42f9d";

const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState('');
const [query, setQuery] = useState('');

useEffect( () => {
    getRecipes();
}, [query]);

const getRecipes = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  setRecipes(data.hits);
  console.log(data.hits);
};

  const updateSeach = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App container">
      <form onSubmit={getSearch} className="search-form row">
        <input placeholder="Search here..." className="search-bar form-control col-9" type="text" value={search} onChange={updateSeach}/>
        <button className="search-button btn btn-primary col-1" type="submit">Search</button>
      </form>
      <div className="container"> 
      {recipes.map(recipe => ( 
        <Recipe key={recipe.recipe.image} title={recipe.recipe.label} calories={recipe.recipe.calories} 
         image={recipe.recipe.image} source={recipe.recipe.source} url = {recipe.recipe.shareAs}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
