import {
  Card,
  LogoWrapper,
  BackgroundImage,
  Rectangle,
} from "./UserItem.styled";

import { ReactComponent as Logo } from "../../images/logo.svg";
import Avatar from "../Avatar/Avatar";
import UserStatsInfo from "../UserStatsInfo/UserStatsInfo";

const UserItem = (props) => {
  const { user: name, tweets, followers, avatar, id } = props.user;

  return (
    <Card>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <BackgroundImage />

      <Rectangle />
      <Avatar name={name} avatar={avatar} />
      <UserStatsInfo tweets={tweets} followers={followers} id={id} />
    </Card>
  );
};

export default UserItem;
