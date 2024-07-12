import { Recipe } from "../types";
import "./RecipeCard.css";


interface Props {
    recipe: Recipe
}

const RecipeCard = ({recipe}: Props) => {
    return (
        <div className="recipe-card">
            <div className="recipe-image">
                <img src={recipe.image} />
            </div>
            <div className="recipe-title">
                <h3>{recipe.title}</h3>
                <div className="recipe-summary">
                    <button>More About this recipe</button>
                </div>
            </div>
        </div>
    )
}

export default RecipeCard;