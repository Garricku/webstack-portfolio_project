import { Recipe } from "../types";
import "./RecipeCard.css";

interface Props {
  recipe: Recipe;
}

const FullRecipeCard = ({ recipe }: Props) => {
    return (
      <div className="recipe-card">
        <div className="recipe-image">
          <img src={recipe.image} alt={recipe.title} />
        </div>
        <div className="recipe-title">
          <h3>{recipe.title}</h3>
        </div>
        <div className="recipe-details">
          <h4>Ingredients:</h4>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>
                {ingredient.amount} of {ingredient.name}
              </li>
            ))}
          </ul>
          <h4>Method:</h4>
          <p>{recipe.instructions}</p>
        </div>
      </div>
    );
};
  
export default FullRecipeCard;