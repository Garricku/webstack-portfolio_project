import { Recipe } from "../types";
import "./FullRecipeCard.css";

interface Props {
  recipe: Recipe;
}

const FullRecipeCard = ({ recipe }: Props) => {
  console.log('FullRecipeCard received recipe:', recipe); // Debugging statement

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="full-recipe-card">
      <div className="full-recipe-image">
        <img src={recipe.image} alt={recipe.title} />
      </div>
      <div className="full-recipe-title">
        <h3>{recipe.title}</h3>
      </div>
      <div className="full-recipe-details">
        <h4>Ingredients:</h4>
        <ul>
          {recipe.extendedIngredients?.map((ingredient, index) => (
            <li key={index}>
              {ingredient.amount} {ingredient.measures.us.unitShort} of {ingredient.name}
            </li>
          ))}
        </ul>
        <h4>Method:</h4>
        <p dangerouslySetInnerHTML={{ __html: recipe.instructions }}></p>
      </div>
    </div>
  );
};

export default FullRecipeCard;