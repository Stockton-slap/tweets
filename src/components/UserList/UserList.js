import { useEffect, useState } from "react";

import UserItem from "../UserItem/UserItem";

import { BackButton, Container, List, LoadMoreButton } from "./UserList.styled";
import { fetchUsers } from "../../services/fetchUsers";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchUsers(page).then((results) =>
      setUsers((prevUsers) => {
        return prevUsers.concat(results);
      })
    );
  }, [page]);

  const handleLoadMoreClick = () => {
    setPage((page) => page + 1);
  };
  console.log(page);
  return (
    <Container>
      <Link to="/">
        <BackButton>Back</BackButton>
      </Link>
      <List>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </List>
      <LoadMoreButton type="button" onClick={handleLoadMoreClick}>
        Load more
      </LoadMoreButton>
    </Container>
  );
};

export default UserList;
