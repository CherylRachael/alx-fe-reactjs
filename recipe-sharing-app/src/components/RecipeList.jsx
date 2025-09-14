import { useRecipeStore } from "./recipeStore";
import { Link } from "react-router-dom";

function RecipeList() {
  const recipes = useRecipeStore((state) => state.recipes);

  // 🔎 Debug log — this will print to the browser console
  console.log("Recipes in store:", recipes);

  if (!recipes || recipes.length === 0) {
    return (
      <div>
        <h2>No recipes yet!</h2>
        <p>Try adding one above 👆</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Recipes</h2>
      {/* 🔎 Debug helper — shows how many recipes are in state */}
      <p>Count: {recipes.length}</p>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;
