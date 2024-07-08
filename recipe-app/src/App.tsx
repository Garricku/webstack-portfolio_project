import "./App.css";
import { FormEvent, useState } from "react";
import * as api from "./api";
import { Recipe } from "./types";
import RecipeCard from "./components/RecipeCard";
import foodie from "./assets/foodie.jpg"


function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const handleSearchSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const recipes = await api.searchRecipes(searchTerm, 1);
      setRecipes(recipes.results);
    } catch (error) {
      console.log('Error fetching recipes:', error);
    }
  };

  return (
    <div>
      <div className="header-image">
        <img src={foodie} alt="Foodie" />
        <h1 className="app-title">Foodie</h1>
      </div>
      <form onSubmit={(event)=> handleSearchSubmit(event)}>
      <input
        type="text"
        required
        placeholder="Search for your favorite foods e.g. Pizza"
        value={searchTerm}
        onChange={(event)=> setSearchTerm(event.target.value)}/>
        <button type="submit">Submit</button>
      </form>
      {recipes.map((recipe) => (
        <RecipeCard recipe={recipe}/>
      ))}
    </div>
  );
};

export default App;
