const apiKey = process.env.API_KEY;

export const searchRecipes = async (searchTerm: string, page: number) => {
    if(!apiKey) {
        throw new Error('The API key could not be found');
    }

    const url = new URL('https://api.spoonacular.com/recipes/complexSearch');

    const queryParams = {
        apiKey,
        query: searchTerm,
        number: '10',
        offset: (page * 10).toString()
    }
    url.search = new URLSearchParams(queryParams).toString();
    
    try {
        const searchResponce = await fetch(url);
        const resultsJson = await searchResponce.json();
        return resultsJson;
    } catch (error) {
        console.log(error);
    }
}

export const getRecipeSummary = async(recipeId:string) => {
    if(!apiKey) {
        throw new Error('The API key could not be found');
    }
    const url = new URL(`https://api.spoonacular.com/recipes/${recipeId}/summary`);
    const params = {
        apiKey: apiKey
    }
    url.search = new URLSearchParams(params).toString();

    const responce = await fetch(url);
    const json = await responce.json();

    return json;
}

export const getRecipeInformation = async(recipeId:string) => {
    if (!apiKey) {
      throw new Error('The API key could not be found');
    }
  
    const url = new URL(`https://api.spoonacular.com/recipes/${recipeId}/information`);
    const params = {
      apiKey: apiKey,
      includeNutrition: 'false'
    };
    url.search = new URLSearchParams(params).toString();
  
    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error('Failed to fetch recipe information');
    }
  
    const json = await response.json();
    return json;
  }