import axios from "axios";

axios.defaults.baseURL = "https://644a604079279846dce69ed8.mockapi.io/api";

export const fetchUsers = async (page) => {
  try {
    const res = await axios.get(`/users?page=${page}&limit=3`);

    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch users: " + error.message);
  }
};
