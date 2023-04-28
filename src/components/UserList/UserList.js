import { useEffect, useState } from "react";

import UserItem from "../UserItem/UserItem";

import { Container, List, LoadMoreButton } from "./UserList.styled";
import { fetchUsers } from "../../services/fetchUsers";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getUsers = async () => {
      const results = await fetchUsers(page);
      setUsers(results);
    };

    getUsers();
  }, [page]);

  const handleClick = () => {
    setPage(page + 1);
  };

  return (
    <Container>
      <List>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </List>
      <LoadMoreButton type="button" onClick={handleClick}>
        Load more
      </LoadMoreButton>
    </Container>
  );
};

export default UserList;
