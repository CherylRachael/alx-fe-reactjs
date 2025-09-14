import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import DeleteRecipeButton from './components/DeleteRecipeButton';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <Router>
      <div>
        <h1>🍲 Recipe Sharing App</h1>

        {/* 🔹 Navigation */}
        <nav>
          <Link to="/">Home</Link> |{' '}
          <Link to="/favorites">Favorites</Link> |{' '}
          <Link to="/recommendations">Recommendations</Link>
        </nav>

        {/* 🔹 Routes */}
        <Routes>
          {/* Home route */}
          <Route
            path="/"
            element={
              <div>
                <SearchBar />
                <AddRecipeForm />
                <RecipeList />
              </div>
            }
          />

          {/* Recipe details page */}
          <Route
            path="/recipe/:id"
            element={
              <div>
                <RecipeDetails />
                <EditRecipeForm />
                <DeleteRecipeButton />
              </div>
            }
          />

          {/* Favorites page */}
          <Route path="/favorites" element={<FavoritesList />} />

          {/* Recommendations page */}
          <Route path="/recommendations" element={<RecommendationsList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
