import axios from "axios";

const BASE_URL = "https://api.github.com";

// 🔹 Advanced search using GitHub’s Search API
export const searchUsers = async ({ username, location, minRepos }) => {
  try {
    let query = "";

    if (username) query += `${username} in:login `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>=${minRepos}`;

    const response = await axios.get(`${BASE_URL}/search/users?q=${query.trim()}`);
    return response.data.items;
  } catch (error) {
    console.error("Error searching GitHub users:", error);
    return [];
  }
};
