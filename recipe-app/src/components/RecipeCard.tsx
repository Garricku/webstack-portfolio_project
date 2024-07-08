import { Recipe } from "../types";


interface Props {
    recipe: Recipe
}

const RecipeCard = ({recipe}: Props) => {
    return (
        <div className="recipe-card">
            <img src={recipe.image} />
            <div className="recipe-title">
                <h3>{recipe.title}</h3>
            </div>
            <div className="recipe-info">
                <p>Something about this recipe.</p>
            </div>
        </div>
    )
}

export default RecipeCard;