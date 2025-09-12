import { useRecipeStore } from './recipeStore';

const DeleteRecipeButton = ({ id, onDeleted }) => {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);

  const handleDelete = () => {
    // optional confirm
    if (!confirm('Delete this recipe?')) return;
    deleteRecipe(id);
    if (onDeleted) onDeleted();
  };

  return (
    <button onClick={handleDelete} style={{ background: 'tomato', color: 'white' }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
