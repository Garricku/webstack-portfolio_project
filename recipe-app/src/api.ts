export const searchRecipes = async (searchTerm: string, page: number) => {
    const buildUrl = new URL("http://localhost:5000/api/recipes/search");
    buildUrl.searchParams.append('searchTerm', searchTerm);
    buildUrl.searchParams.append('page', String(page));

    const responce = await fetch(buildUrl);
    if (!responce.ok) {
        throw new Error(`HTTP error code: ${responce.status}`);
    }
    return responce.json();
}