import { useEffect, useState } from "react";

import UserItem from "../UserItem/UserItem";

import { List } from "./UserList.styled";
import { fetchUsers } from "../../services/fetchUsers";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const results = await fetchUsers();
      setUsers(results);
    };

    getUsers();
  }, []);

  return (
    <List>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </List>
  );
};

export default UserList;
