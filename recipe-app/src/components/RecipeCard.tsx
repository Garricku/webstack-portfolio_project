import { Recipe } from "../types";
import "./RecipeCard.css";

interface Props {
  recipe: Recipe;
  onClick: () => void;
}

const RecipeCard = ({ recipe, onClick }: Props) => {
  return (
    <div className="recipe-card" onClick={onClick}>
      <div className="recipe-image">
        <img src={recipe.image} alt={recipe.title} />
      </div>
      <div className="recipe-title">
        <h3>{recipe.title}</h3>
        <div className="recipe-summary">
          <button>More About this recipe</button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;