import axios from "axios";

axios.defaults.baseURL = "https://644a604079279846dce69ed8.mockapi.io/api";

export const fetchUsers = async () => {
  try {
    const res = await axios.get("/users");

    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch users: " + error.message);
  }
};
