import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Recipe title is required";
    if (!ingredients.trim()) {
      newErrors.ingredients = "Please add ingredients";
    } else if (ingredients.split(",").length < 2) {
      newErrors.ingredients = "Include at least two ingredients (comma separated)";
    }
    if (!steps.trim()) newErrors.steps = "Please add preparation steps";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Simulate submit (for now just log)
      console.log({
        title,
        ingredients: ingredients.split(",").map((i) => i.trim()),
        steps,
      });

      alert("Recipe submitted successfully 🎉");

      // Clear form
      setTitle("");
      setIngredients("");
      setSteps("");
    }
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg mx-auto">
        <h1 className="text-2xl font-bold text-blue-800 mb-6 text-center">
          Add a New Recipe
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Recipe Title */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Recipe Title
            </label>
            <input
              type="text"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter recipe title"
            />
            {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
          </div>

          {/* Ingredients */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Ingredients (comma separated)
            </label>
            <textarea
              rows="4"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              placeholder="e.g. Flour, Sugar, Butter"
            />
            {errors.ingredients && (
              <p className="text-red-500 text-sm">{errors.ingredients}</p>
            )}
          </div>

          {/* Preparation Steps */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Preparation Steps
            </label>
            <textarea
              rows="6"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
              placeholder="Write step-by-step instructions"
            />
            {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Submit Recipe
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddRecipeForm;
