import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
interface RecipeDetail {
    name: string;
    cuisine: string;
    ingredients: string[];
    instructions: string;
    cookTimeMinutes: string;
    servings: string;
    image: string;
}

const RecipeDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const [recipeDetail, setRecipeDetail] = useState<RecipeDetail | null>(null);

    const API_URL = `https://dummyjson.com/recipes/${id}`

    const fetchRecipeDetail = async () => {
        const response = await fetch(API_URL);
        const data = await response.json();
        setRecipeDetail(data);
    }
    useEffect(() => {
        fetchRecipeDetail()
    }, [id]);
    if (recipeDetail==null) {
        return <h3>no recipe data found !</h3>
    }
    return (
        <>
            <h2>Recipe Deatils</h2>
            <ul className="list-group">
                <img src={recipeDetail.image} style={{ width: "300px", height: "300px" }}/>
                <li className="list-group-item">Recipe Name:{recipeDetail.name}</li>
                <li className="list-group-item">cuisine:{recipeDetail.cuisine}</li>
                <li className="list-group-item">ingredients:{recipeDetail.ingredients}</li>
                <li className="list-group-item">instructions:{recipeDetail.instructions}</li>
                <li className="list-group-item">cookTimeMinutes:{recipeDetail.cookTimeMinutes}</li>
                <li className="list-group-item">servings:{recipeDetail.servings}</li>
            </ul>
        </>
    );
}
export default RecipeDetail;