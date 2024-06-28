import express from 'express';
import cors from 'cors';
import "dotenv/config"
import * as recipeApi from './recipe_api';

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/recipes/search", async (request, responce) => {
    const searchTerm = request.query.searchTerm as string;
    const page = parseInt(request.query.page as string);
    const result = await recipeApi.recipeSearch(searchTerm, page);

    return responce.json(result);
});

app.listen(5000, () => {
    console.log('The app is cooking!');
});