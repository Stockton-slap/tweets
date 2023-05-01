import axios from "axios";

export const fetchAllUsers = async () => {
  try {
    const res = await axios.get(`/users`);

    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch users: " + error.message);
  }
};
