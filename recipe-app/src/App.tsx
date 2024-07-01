import "./App.css";
import { FormEvent, useState } from "react";
import * as api from "./api";
import { Recipe } from "./types";

function App() {
  const [searchTerm, setSearchTerm] = useState("burgers");
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
      <form onSubmit={(event)=> handleSearchSubmit(event)}>
        <button type="submit">Submit</button>
      </form>
      {recipes.map((recipe) => (
        <div>
          recipe image: {recipe.image}
          recipe title: {recipe.title}
        </div>
      ))}
    </div>
  );
};

export default App;
