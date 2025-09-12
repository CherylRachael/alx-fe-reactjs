import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = ({ recipe, onSaved }) => {
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const updateRecipe = useRecipeStore((s) => s.updateRecipe);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe(recipe.id, { title, description });
    if (onSaved) onSaved();
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <div>
        <input
          type="text"
          placeholder="Recipe title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <textarea
          placeholder="Recipe description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;
