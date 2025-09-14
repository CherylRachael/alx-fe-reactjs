import create from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  addRecipe: (recipe) => set((state) => ({
    recipes: [...state.recipes, { ...recipe, id: Date.now().toString() }],
    filteredRecipes: [...state.recipes, { ...recipe, id: Date.now().toString() }]
  })),
  updateRecipe: (updatedRecipe) => set((state) => {
    const newRecipes = state.recipes.map((r) =>
      r.id === updatedRecipe.id ? updatedRecipe : r
    );
    return { recipes: newRecipes, filteredRecipes: newRecipes };
  }),
  deleteRecipe: (id) => set((state) => {
    const newRecipes = state.recipes.filter((r) => r.id !== id);
    return { recipes: newRecipes, filteredRecipes: newRecipes };
  }),
  setSearchTerm: (term) => set((state) => {
    const filtered = state.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(term.toLowerCase())
    );
    return { searchTerm: term, filteredRecipes: filtered };
  }),
}));
