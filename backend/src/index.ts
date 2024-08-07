import express from 'express';
import cors from 'cors';
import "dotenv/config"
import * as RecipeApi from './recipe_api';

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/recipes/search", async (req, res) => {
    const searchTerm = req.query.searchTerm as string;
    const page = parseInt(req.query.page as string);
    const result = await RecipeApi.searchRecipes(searchTerm, page);

    return res.json(result);
});

app.get("/api/recipes/:recipeId/summary", async(req, res) => {
    const recipeId = req.params.recipeId;
    const result = await RecipeApi.getRecipeSummary(recipeId);
    return res.json(result);
});

app.get("/api/recipes/:recipeId/information", async (req, res) => {
    const recipeId = req.params.recipeId;
    const result = await RecipeApi.getRecipeInformation(recipeId);
    return res.json(result);
});

app.listen(5000, () => {
    console.log('The app is cooking!');
});