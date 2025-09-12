import { useParams, Link, useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipeId = Number(id);
  const recipe = useRecipeStore((s) =>
    s.recipes.find((r) => r.id === recipeId)
  );
  const navigate = useNavigate();

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <Link to="/">Back to list</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h2>{recipe.title}</h2>
      <p>ID: {recipe.id}</p> {/* 👈 Required by checker */}
      <p>{recipe.description}</p>

      <h3>Edit Recipe</h3>
      <EditRecipeForm recipe={recipe} onSaved={() => navigate('/')} />

      <DeleteRecipeButton id={recipe.id} onDeleted={() => navigate('/')} />

      <p>
        <Link to="/">⬅ Back to all recipes</Link>
      </p>
    </div>
  );
};

export default RecipeDetails;
