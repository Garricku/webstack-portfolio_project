export interface Recipe {
    id: number;
    title: string;
    image: string;
    summary: string;
    ingredients: { name: string; amount: string }[];
    instructions: string;
}