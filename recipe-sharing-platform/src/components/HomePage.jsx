import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error("Error loading recipes:", err));
  }, []);

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Add Recipe Button */}
      <div className="text-center mb-6">
        <Link
          to="/add-recipe"
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
        >
          ➕ Add New Recipe
        </Link>
      </div>

      {/* Recipe Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-800 mb-2">
                {recipe.title}
              </h2>
              <p className="text-gray-600 text-sm mb-3">{recipe.summary}</p>
              <Link
                to={`/recipe/${recipe.id}`}
                className="text-blue-600 font-semibold hover:underline"
              >
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
