import "./App.css";
import { FormEvent, useRef, useState } from "react";
import * as api from "./api";
import { Recipe } from "./types";
import RecipeCard from "./components/RecipeCard";
import foodie from "./assets/fooooodie.png";
import searchglass from "./assets/search.svg";


function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const pageNumber = useRef(1);

  const handleSearchSubmit = async (event: FormEvent) => {
    event.preventDefault();
    pageNumber.current = 1;
    try {
      const recipes = await api.searchRecipes(searchTerm, 1);
      setRecipes(recipes.results);
    } catch (error) {
      console.log('Error fetching recipes:', error);
    }
  };

  const handleViewMore = async() => {
    const nextPage = pageNumber.current + 1;
    try {
      const nextRecipe = await api.searchRecipes(searchTerm, nextPage);
      setRecipes([...recipes, ...nextRecipe.results]);
      pageNumber.current = nextPage;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div className="body">
        <div className="header-image">
          <img src={foodie} alt="Foodie" />
        </div>
        <div className="navbar">
          <div>
            <h4 className="nav-item" onClick={(event) => { setSearchTerm('')}}>New Search</h4>
          </div>
          <form onSubmit={(event)=> handleSearchSubmit(event)}>
          <input
            type="text"
            required
            placeholder="Search for food e.g. Pizza"
            value={searchTerm}
            onChange={(event)=> setSearchTerm(event.target.value)}/>
            <button className="search" type="submit"><img src={searchglass} alt="Search"/></button>
          </form>
        </div>
      </div>
      <div className="sub-heading">
        <h1 className="app-title">Yumm!</h1>
        <h1>Find Your Next Favourite Meal!</h1>
      </div>
      {recipes.map((recipe) => (
        <RecipeCard recipe={recipe}/>
      ))}
      <div>
        <button className="view-more-button" onClick={handleViewMore}>Show More...</button>
      </div>
      <footer className="footer">
        <p>Copyright © 2024 Foodie - All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default App;
