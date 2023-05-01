import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import UserItem from "../UserItem";
import Loader from "../Loader";
import Dropdown from "../Dropdown";

import {
  BackButton,
  Container,
  List,
  LoadMoreButton,
  LoadMoreContainer,
  TopButtonsContainer,
} from "./UserList.styled";

import { fetchUsers } from "../../services/fetchUsers";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isShowButton, setIsShowButton] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState("showAll");

  const filteredUsers = useMemo(() => {
    const followed = localStorage.getItem("followersList")
      ? JSON.parse(localStorage.getItem("followersList"))
      : [];

    switch (type) {
      case "follow":
        return users.filter((user) => !followed.includes(user.id));
      case "followings":
        return users.filter((user) => followed.includes(user.id));
      default:
        return users;
    }
  }, [type, users]);

  useEffect(() => {
    setIsShowButton(false);
    setIsLoading(true);

    fetchUsers(page).then((result) =>
      setUsers((prevUsers) => {
        setIsLoading(false);

        if (result.data.length > 0) {
          setIsShowButton(true);
        }

        setIsShowButton(result.hits);

        return prevUsers.concat(result.data);
      })
    );
  }, [page]);

  const handleLoadMoreClick = () => {
    setPage((page) => page + 1);
  };

  return (
    <Container>
      <TopButtonsContainer>
        <Link to="/">
          <BackButton>Back</BackButton>
        </Link>
        <Dropdown setType={setType} type={type} />
      </TopButtonsContainer>
      <List>
        {filteredUsers.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </List>
      {isLoading && <Loader />}
      {isShowButton && filteredUsers.length > 0 && (
        <LoadMoreContainer>
          <LoadMoreButton type="button" onClick={handleLoadMoreClick}>
            Load more
          </LoadMoreButton>
        </LoadMoreContainer>
      )}
    </Container>
  );
};

export default UserList;
