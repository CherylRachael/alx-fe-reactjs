import axios from "axios";

const API_URL = "https://api.github.com/users";

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${API_URL}/${username}`);
    return response.data;
  } catch {
    // Return null if request fails (e.g., user not found or network error)
    return null;
  }
};
