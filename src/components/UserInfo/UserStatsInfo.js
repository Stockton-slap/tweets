import { useEffect, useState } from "react";

import {
  InfoContainer,
  Tweets,
  Followers,
  Button,
} from "./UserStatsInfo.styled";

const UserStatsInfo = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {}, []);

  const handleClick = (e) => {};

  return (
    <>
      <InfoContainer>
        <Tweets>TWEETS</Tweets>
        <Followers>FOLLOWERS</Followers>
        <Button type="button" onClick={handleClick}>
          FOLLOW
        </Button>
      </InfoContainer>
    </>
  );
};

export default UserStatsInfo;
