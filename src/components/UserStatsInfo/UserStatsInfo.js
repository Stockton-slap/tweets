import { useState } from "react";
import {
  InfoContainer,
  Tweets,
  Followers,
  Button,
} from "./UserStatsInfo.styled";

const UserStatsInfo = ({ tweets, followers }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <InfoContainer>
        <Tweets>{tweets} TWEETS</Tweets>
        <Followers>{isClicked ? followers + 1 : followers} FOLLOWERS</Followers>
        <Button type="button" isClicked={isClicked} onClick={handleClick}>
          {isClicked ? "FOLLOWING" : "FOLLOW"}
        </Button>
      </InfoContainer>
    </>
  );
};

export default UserStatsInfo;
