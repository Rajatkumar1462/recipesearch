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
    <div className="App">
    <div className="form-header">
    <div className="container">
    <div className="row">
      <div className="col-md-6 d-flex flex-column justify-content-center">
      <h1>Recipe Finder</h1>
      <p>Delicious recipes waiting for you...</p>
      </div>
      <div className="col-md-6 headerimage"><img src='/img-logo.webp' alt=""/></div>
    </div>
    </div>
    </div>
    <div className="form-area">
      <form onSubmit={getSearch} className="search-form row d-flex flex-column align-items-center justify-content-center">
      <div class="d-flex justify-content-center align-items-center mt-2">
        <input placeholder="Search Recipe here..." className="search-bar form-control col-9" type="text" value={search} onChange={updateSeach}/>
        </div>
        <button className="search-button btn btn-primary col-1" type="submit">Search</button>
      </form>
      </div>
      
      <div className="forbgcolor">
          <div className="container recipes-container align-items-center"> 
          {recipes.map(recipe => ( 
            <Recipe key={recipe.recipe.image} title={recipe.recipe.label} calories={recipe.recipe.calories} 
             image={recipe.recipe.image} source={recipe.recipe.source} url = {recipe.recipe.shareAs}
            />
          ))}
          </div>
      </div>
    </div>
  );
}

export default App;
