import { useState } from "react";
import {
  InfoContainer,
  Tweets,
  Followers,
  FollowButton,
} from "./UserStatsInfo.styled";

const UserStatsInfo = ({ tweets, followers, id }) => {
  const [isFollowed, setIsFollowed] = useState(
    localStorage.getItem("followersList")?.includes(id)
  );

  const actualFollowers = isFollowed ? followers + 1 : followers;

  const handleClick = () => {
    const followersList = localStorage.getItem("followersList")
      ? JSON.parse(localStorage.getItem("followersList"))
      : [];

    if (!followersList.includes(id)) {
      followersList.push(id);
      localStorage.setItem("followersList", JSON.stringify(followersList));
      setIsFollowed(true);
    } else {
      const index = followersList.indexOf(id);
      followersList.splice(index, 1);
      localStorage.setItem("followersList", JSON.stringify(followersList));
      setIsFollowed(false);
    }
  };

  return (
    <>
      <InfoContainer>
        <Tweets>{tweets} TWEETS</Tweets>
        <Followers>{actualFollowers.toLocaleString()} FOLLOWERS</Followers>
        <FollowButton
          type="button"
          isFollowed={isFollowed}
          onClick={handleClick}
        >
          {isFollowed ? "FOLLOWING" : "FOLLOW"}
        </FollowButton>
      </InfoContainer>
    </>
  );
};

export default UserStatsInfo;
