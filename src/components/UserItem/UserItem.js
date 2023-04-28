import { Card, LogoWrapper, BackgroundImage } from "./UserItem.styled";

import { ReactComponent as Logo } from "../../images/logo.svg";
import Avatar from "../Avatar/Avatar";
import UserStatsInfo from "../UserStatsInfo/UserStatsInfo";

const UserItem = (props) => {
  const { user: name, tweets, followers, avatar } = props.user;

  return (
    <Card>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <BackgroundImage />

      <Avatar name={name} avatar={avatar} />
      <UserStatsInfo tweets={tweets} followers={followers} />
    </Card>
  );
};

export default UserItem;
