import PropTypes from "prop-types";

import Avatar from "../Avatar";
import UserStatsInfo from "../UserStatsInfo";

import {
  Card,
  LogoWrapper,
  BackgroundImage,
  Rectangle,
} from "./UserItem.styled";

import { ReactComponent as Logo } from "../../images/logo.svg";

const UserItem = ({ user }) => {
  const { tweets, followers, avatar, id } = user;

  return (
    <Card>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <BackgroundImage />

      <Rectangle />
      <Avatar avatar={avatar} />
      <UserStatsInfo tweets={tweets} followers={followers} id={id} />
    </Card>
  );
};

UserItem.propTypes = {
  user: PropTypes.shape({
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};

export default UserItem;
