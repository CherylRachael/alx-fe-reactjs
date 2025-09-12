import { useRecipeStore } from './recipeStore';

const DeleteRecipeButton = ({ id, onDeleted }) => {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(id);
    if (onDeleted) onDeleted();
  };

  return (
    <button
      onClick={handleDelete}
      style={{ background: 'red', color: 'white', marginTop: '1rem' }}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
