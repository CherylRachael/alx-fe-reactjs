import { useState } from "react";
import { searchUsers } from "../services/githubService.js";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResults([]);

    try {
      const users = await searchUsers({ username, location, minRepos });
      if (users.length > 0) {
        setResults(users);
      } else {
        setError("Looks like we cant find the user");
      }
    } catch {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold text-center mb-6">GitHub Advanced User Search</h1>

      {/* 🔹 Search Form */}
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Min Repos"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="p-2 border rounded"
        />
        <button
          type="submit"
          className="col-span-1 md:col-span-3 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {/* 🔹 Loading & Errors */}
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}

      {/* 🔹 Results */}
      <div className="grid gap-4">
        {results.map((user) => (
          <div key={user.id} className="flex items-center gap-4 p-4 border rounded shadow">
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h2 className="text-lg font-semibold">{user.login}</h2>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
