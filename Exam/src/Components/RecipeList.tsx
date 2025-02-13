import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
interface Recipe {
    id: string;
    name: string;
    prepTimeMinutes: string;
    cuisine: string;
    image: string;
}
function RecipeList() {
    const API_URL = 'https://dummyjson.com/recipes'
    const [recipeList, setRecipeList] = useState<Recipe[]>();
    const fetchRecipe = async () => {
        const response = await fetch(API_URL);
        const data = await response.json();
        setRecipeList(data.recipes);
    }
    useEffect(() => {
        fetchRecipe()
    }, []);
    return (
        <div className="card-group">
            <div className="row row-col1 row-cols-md-3 g-4">
                {recipeList?.map((recipe) =>
                    <div className="card">
                        <div className="card-body">
                            <img src={recipe.image} className="card-img-top" alt={recipe.name} />
                            <h5 className="card-title">{recipe.name}</h5>
                            <p className="card-text">Prepration Time: {recipe.prepTimeMinutes}</p>
                            <p className="card-text">Cuisine: {recipe.cuisine}</p>
                            <Link className="btn btn-success" to={`/recipeDetails/${recipe.id}`}>View details</Link>
                        </div>
                    </div>
                )}
            </div>

        </div>
    );
}
export default RecipeList