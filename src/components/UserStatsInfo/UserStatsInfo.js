import { useState } from "react";
import {
  InfoContainer,
  Tweets,
  Followers,
  Button,
} from "./UserStatsInfo.styled";

const UserStatsInfo = ({ tweets, followers }) => {
  const [isFollowed, setIsFollowed] = useState(false);

  const handleClick = () => {
    setIsFollowed(!isFollowed);
  };

  return (
    <>
      <InfoContainer>
        <Tweets>{tweets} TWEETS</Tweets>
        <Followers>
          {isFollowed ? followers + 1 : followers} FOLLOWERS
        </Followers>
        <Button type="button" isFollowed={isFollowed} onClick={handleClick}>
          {isFollowed ? "FOLLOWING" : "FOLLOW"}
        </Button>
      </InfoContainer>
    </>
  );
};

export default UserStatsInfo;
