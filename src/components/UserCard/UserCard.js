import UserInfo from "../UserInfo";

import { CardContainer, LogoWrapper, BackgroundImage } from "./UserCard.styled";

import { ReactComponent as Logo } from "../../images/logo.svg";

const UserCard = () => {
  return (
    <CardContainer>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <BackgroundImage />
      <UserInfo />
    </CardContainer>
  );
};

export default UserCard;
