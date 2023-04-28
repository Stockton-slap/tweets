import UserStatsInfo from "../UserInfo";
import Avatar from "../Avatar/Avatar";

import { CardContainer, LogoWrapper, BackgroundImage } from "./UserCard.styled";

import { ReactComponent as Logo } from "../../images/logo.svg";

const UserCard = () => {
  return (
    <CardContainer>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <BackgroundImage />
      <Avatar />
      <UserStatsInfo />
    </CardContainer>
  );
};

export default UserCard;
