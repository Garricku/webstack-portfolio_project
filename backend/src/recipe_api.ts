const apiKey = process.env.API_KEY;

export const recipeSearch = async (searchTerm: string, page: number) => {
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
        const searchRes = await fetch(url);
        const resJson = await searchRes.json();
        return resJson;
    } catch (error) {
        console.log(error);
    }
}